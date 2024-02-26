// const { before } = require("lodash");

import("../../../support/commands.js");

describe("SearchFunctionality", () => {
  before(() => {
    cy.login();
  });

it("Kelola Kata Kunci", () => {
    cy.get('.css-1ogihpd').click();
    cy.get('[href="/setting-keyword/index"] > .MuiButtonBase-root > .MuiTypography-root').click();
    
    //Sunting Figur
    cy.get(':nth-child(2) > .MuiGrid-container > .MuiGrid-grid-xs-4 > .MuiButtonBase-root').click();
    cy.get('.css-1h8mcik').click();
    cy.get(':nth-child(1) > .MuiFormControl-fullWidth > .MuiTypography-root').click();
    
    //Input Nama Kandidat
    cy.get(`input[name="name"]`).clear();
    cy.get(`input[name="name"]`).type('Agus Harimurti Yudhoyono');
    
    //Pilih Pemilihan
    //cy.get(':nth-child(2) > .css-tzsjye > .MuiTypography-root').click();
    
    //Pilih Dapil
    //cy.get(':nth-child(3) > .css-tzsjye > .MuiTypography-root').click();
    
    //Input Keyword
    cy.get(':nth-child(5) > .css-tzsjye > .MuiBox-root > :nth-child(1)').click();
    cy.get('#autocomplete_main_keyword').type('#AHY');
    cy.get('#autocomplete_main_keyword').type('#PDemokrat');
    cy.get('#autocomplete_main_keyword').type('#SBYudhoyono');
    cy.get('#autocomplete_main_keyword').type('#DemokratS14P');
    cy.get('#autocomplete_main_keyword').type('#Menteri ATR');

    //Input Biografi Kandidat
    cy.get(':nth-child(8) > .MuiFormControl-root > .MuiTypography-root').click();
    cy.get('[rows="4"]').type('Mayor Inf. (Purn.) H. Agus Harimurti Yudhoyono, M.Sc., M.P.A., M.A. (lahir 10 Agustus 1978), atau yang lebih akrab disapa AHY, adalah politikus dan mantan perwira militer Indonesia. Putra dari mantan presiden Susilo Bambang Yudhoyono, ia menjabat Direktur Eksekutif The Yudhoyono Institute (TYI) dan pendiri AHY Foundation.Sebelumnya, ia berkarier sebagai militer profesional di Tentara Nasional Indonesia Angkatan Darat (TNI-AD) selama 16 tahun. AHY menjadi lulusan terbaik dari Akademi Militer tahun 2000 dan meraih penghargaan Presiden Republik Indonesia; Bintang Adi Makayasa.');

    //Upload Foto Kandidat
    cy.get(':nth-child(9) > .MuiFormControl-root > .MuiTypography-root').click();
    cy.get('.MuiFormControl-root > .MuiButtonBase-root').click();
        
    //Input Akun Sosial Media
    //Twitter
    cy.get(':nth-child(10) > .css-tzsjye > .MuiBox-root > :nth-child(1)');
    cy.get('#autocomplete_twitter').type('AgusYudhoyono').click();

    //Facebook
    cy.get(':nth-child(11) > .css-tzsjye > .MuiBox-root');
    cy.get('#autocomplete_facebook').type('AHYudhoyono');
    //Instagram
    cy.get(':nth-child(12) > .css-tzsjye > .MuiBox-root > :nth-child(1)');
    cy.get('#autocomplete_instagram').type('agusyudhoyono');
    //Youtube
    cy.get(':nth-child(13) > .css-tzsjye > .MuiBox-root > :nth-child(1)');
    cy.get('#autocomplete_youtube').type('AgusYudhoyono');
    //Tiktok
    cy.get(':nth-child(14) > .css-tzsjye > .MuiBox-root > :nth-child(1)');
    cy.get('#autocomplete_tiktok').type('agusharimurtiyudhoyono');
   
    cy.get('.css-1lyye7p').click();
    
});
  });