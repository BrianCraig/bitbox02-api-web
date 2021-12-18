#![no_std]

mod utils;

use noise_protocol::{DH, CipherState};
use wasm_bindgen::prelude::*;
use noise_rust_crypto::{ChaCha20Poly1305, Sha256, X25519};

pub type HandshakeState = noise_protocol::HandshakeState<X25519, ChaCha20Poly1305, Sha256>;


// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub struct Noise {
    hs: HandshakeState,
    enc: CipherState<ChaCha20Poly1305>,
    dec: CipherState<ChaCha20Poly1305>
}

#[wasm_bindgen]
impl Noise {
    pub fn new() -> Noise {
        let hs = HandshakeState::new(
            noise_protocol::patterns::noise_xx(),
            true,
            &b"Noise_XX_25519_ChaChaPoly_SHA256"[..],
            Some(X25519::genkey()),
            None,
            None,
            None,
        );
        let (enc, dec) = hs.get_ciphers();
        Noise{
            hs,
            enc,
            dec
        }
    }

    pub fn write(&mut self,x: &mut [u8],y: &mut [u8]) {
        match self.hs.write_message(x, y) {
            Err(_) => (),
            _ => ()
        }
        if self.hs.completed() {
            let (enc, dec) = self.hs.get_ciphers();
            self.enc = enc;
            self.dec = dec;
        }
    }

    pub fn read(&mut self,x: &mut [u8],y: &mut [u8]) {
        match self.hs.read_message(x, y) {
            Err(_) => (),
            _ => ()
        }
    }

    pub fn encrypt(&mut self,x: &mut [u8],y: &mut [u8]) {
        self.enc.encrypt(x, y);
    }
    
    pub fn decrypt(&mut self,x: &mut [u8],y: &mut [u8]) {
        match self.dec.decrypt(x, y) {
            Err(_) => (),
            _ => ()
        }
    }
}
