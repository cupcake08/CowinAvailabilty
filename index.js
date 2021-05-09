
const tele_url = 'https://api.telegram.org/bot1644509106:AAGXDryRRZJ_Wf0DrwFbpdXyqbr7MU5BzqE/sendMessage?chat_id=1252000843&text='
const url = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=512&date=09-05-2021';
let found = false;
const ans = document.querySelector('#ans');
const ele = document.querySelector('#age');
async function data(){
    const response = await fetch(url);
    const data = await response.json();
    let x = data.sessions;
    for(let y of x){
        console.log(y.name);
        if (y.name === "18-44 JAKHRANA PHC" || y.name === "18-44 BEHROR CHC BEHROR") {
            console.log("Found Your Match");
            console.log(y.name);
            found = true;
            ele.innerText = `${y.min_age_limit}+`;
            console.log(`Fee Type: ${y.fee_type}`);
            let slots = y.slots;
            for (let slot of slots) {
                console.log(`Timing : ${slot}`);
            }
            await fetch(`${tele_url}Its available at ${y.name}`);
        }
        if(!found){
            ele.innerText='data not available';
        }
    }
    if (!found) {
        ans.innerText='NO'
    } else {
        ans.innerText = 'YES';
    }
}
// data();
setInterval(data,15000);
