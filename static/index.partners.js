var suppliers = ['fujihd.png', 'movilift.png', 'srl.png', 'xiwei.png']
var customers = ['world-bank.svg','BGMEA.png','Bashundhara.png','DOHS.png','uttara_11.png','uttara_14.png']
var update = (partner, partner_type) => {
	var partner = `<img src="./static/logo/${partner_type}/${partner}" loading="lazy">`;
	$(partner).appendTo(`#${partner_type}`)
}
suppliers.forEach(partner => update(partner,"suppliers"))
customers.forEach(partner => update(partner,"customers"))
/* repeat twice on mobile and four times on pc for immersive bug-free experience */
suppliers.forEach(partner => update(partner,"suppliers"))
customers.forEach(partner => update(partner,"customers"))