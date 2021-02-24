const nom_syll = ["KO", "FI", "NAN", "KIS", "SI", "NE", "KRE", "MAN", "LUE", "SO", "RO", "SU", "GUI", "HU", "PA", "TE", "FO", "DA", "VE", "GY", "ZA", "BA", "DI", "LO", "BE", "MO", "NO", "POI"]

const prenoms_syll = ["la", "sy", "ku", "mi", "na", "dy", "so", "ju", "no", "ha", "hi", "ba", "bo", "bi", "ca", "co", "ta", "to", "tu", "ti", "te", "va", "vo", "ve", "wa", "wo", "ya", "yo", "yin", "xin", "son", "sam", "fan", "am"]

const email_entr = ["gmail.com", "yahoo.fr", 'hotmail.com', "microsoft.com"]
const photo_ext = ["png", "jpeg", "jpg", "gif"]
const annee = ["2000", "2001", "1999", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010"]
const mois = ["01", "02", "03", "10", "11", "12", "09", "08", "07", "06", "05", "04"]
const jour = ["20", "21", "24", "15", "14", "13", "10"]
const taille = 232

console.log(`INSERT INTO app.educateurs (nom, prenoms, pseudo, photo, mdp, email, no_cni, date_exp_cni, etablissement) VALUES`)
for (let i = 0; i < taille; i++) {
    let nom = ""
    let prenoms = ""
    let pseudo = ""
    let photo = ""
    let mdp = ""
    let email = ""
    let no_cni = ""
    let date_exp_cni = ""
    let etablissement = ""

    for (let j = 1; j <= 2; j++) { nom += nom_syll[1 + parseInt(Math.random() * 25) % nom_syll.length - 1] }
    let prenoms_len = 2 + parseInt(Math.random() * 25) % 2
    for (let j = 1; j <= prenoms_len; j++) { prenoms += prenoms_syll[1 + parseInt(Math.random() * 25) % prenoms_syll.length - 1] }
    etablissement = 1 + parseInt(Math.random() * 25) % 7
    pseudo = prenoms + nom + (1 + parseInt(Math.random() * 25) % 255).toString()
    email = prenoms + nom + '@' + email_entr[1 + parseInt(Math.random() * 25) % email_entr.length - 1]
    photo = nom + prenoms + '.' + photo_ext[1 + parseInt(Math.random() * 25) % photo_ext.length - 1]
    mdp = "1234"
    no_cni = ""
    date_exp_cni = `${annee[1 + parseInt(Math.random() * 25) % annee.length - 1]}-${mois[1 + parseInt(Math.random() * 25) % mois.length - 1]}-${jour[1 + parseInt(Math.random() * 25) % jour.length - 1]}`

    console.log(`('${nom}', '${prenoms}', '${pseudo}', '${photo}', md5('${mdp}'), '${email}', '${no_cni}', '${date_exp_cni}', '${etablissement}')${i == taille - 1 ? ";" : ","}`)

}
