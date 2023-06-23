let url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/${'06'}/${'25'}`;
let birthdays = document.getElementById('birthdays')
let lista = document.querySelector('ul')
let edad = document.getElementById('edad')

const listEsp = document.createElement("li")
const link = document.createElement("a")
link.href = './test.html'
listEsp.appendChild(link)
link.innerHTML = 'LA MILLOR DE TOTES! ⇐ (PUNTXA PER CONEIXERLA)'
lista.appendChild(listEsp)

function alehop(){
    birthdays.style.visibility = 'visible'
}



async function birthday() {
    let response = await fetch(url,
        {
            headers: {
                'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJlNWM4Yzc2ZTcyOTI1ZWJmMzRlNWMwMTdmNzU5NGI3ZSIsImp0aSI6IjFhYzhjMTRkMzA3MTQwYWQxNTE2ZDVhMDU3Mjk0ZjQ1MWEzOGNmYWU1ZWY5MDMzZWRmNTg4YWZiNDE1YzZlZTBlMmZhMDhmZWM3ZTEzZWQ2IiwiaWF0IjoxNjg3NTEyNjc3LjE5NjQ4MSwibmJmIjoxNjg3NTEyNjc3LjE5NjQ4NSwiZXhwIjozMzI0NDQyMTQ3Ny4xOTQ1OTUsInN1YiI6IjMyNTU1MjM2IiwiaXNzIjoiaHR0cHM6Ly9tZXRhLndpa2ltZWRpYS5vcmciLCJyYXRlbGltaXQiOnsicmVxdWVzdHNfcGVyX3VuaXQiOjUwMDAsInVuaXQiOiJIT1VSIn0sInNjb3BlcyI6WyJiYXNpYyJdfQ.CtSfks2Cloq2WYU0SWclGc3VYH9MfWQTZGz2h6z25FYYyobveT_Vigkfmvcg99AT8_7E_IK3BoTmVJxxcPnKi4EZYiVOXx3WCTD5mIH_HH6xnLDNOzCPatJVBtWHbUYXROCU6CHbbHS38tp_JyTQQMuyJN8_gvrivpDbPdV4sMyh3Ui3HlWs0Tr5tyv24hCbNOAmH1WJEK_Ajm4bhrDQC0X4vLJ0XxnS5WlGxQ_ilR0GWuS0Ooj7O2uZVUL9MY8BjKoK_TbyNbwC_61uFT564kqKf_uHkVRyQvb30RWzPSO4wFRbDei6VxcrjubMHRY9z54U3faSbUrp0cOlgrDYjxT4NXg1JNpFf_go0pS_CQGolPnPVaVn5UL6MdU1b-s9MCeyQahRwFsaleXI5OpzG7KtW5FqcA1rP09TNzrEwGwtgAm7S6vHxUL-5szQFHlvCBikJP4yNvJ2ce40qAYgjJgVEYsJDo1ZcyjfJBBcl97hkp8tBiak22T7gGEPb4HjJqYS2F_Dxw7LGf6LYSQmP-KrrcmTCuB_yAJotwFJBOfRO7q_EzemCJDJWIDBp7Qr_QuNBV-fwhw0Awm1F18U4t5g0JZpDguPFjrIC-kX0YW-0U45vntNm11UwTEHNvG2VVxDL4S7cOrcsPwy6BR86HyIGPBF67NQ24IkgLi_EwU',
                'Api-User-Agent': 'Helen Birthday (piterxus@gmail.com)'
            }
        }
    );
    const data = await response.json()
    console.log(data.births)
    const list = data.births
    for (let element of list) {
        const li = document.createElement("li")
        li.textContent = element.text
        lista.appendChild(li)
        console.log(element.text)
    }

    return data
}

birthday()



