function main() {
                //1.575.250
    var balance = 1575250
    const pecahan100000 = Math.floor(balance / 100000)
    console.log(balance / 100000)
    balance = balance - (pecahan100000 * 100000)
    const pecahan50000 = Math.floor(balance / 50000)
    balance = balance - (pecahan50000 * 50000)
    const pecahan20000 = Math.floor(balance / 20000)
    balance = balance - (pecahan20000 * 20000)
    const pecahan5000 = Math.floor(balance / 5000)
    balance = balance - (pecahan5000 * 5000)
    const pecahan100 = Math.floor(balance / 100)
    balance = balance - (pecahan100 * 100)
    const pecahan50 = Math.floor(balance / 50)
    balance = balance - (pecahan50 * 50)

    const total = pecahan100000 + pecahan50000 + pecahan20000 + pecahan5000 + pecahan100 + pecahan50

    console.log(`Total uang pecahan ibu: ${total}`)
    console.log(`Pecahan 100.000 sebanyak ${pecahan100000}`)
    console.log(`Pecahan 50.000 sebanyak ${pecahan50000}`)
    console.log(`Pecahan 20.000 sebanyak ${pecahan20000}`)
    console.log(`Pecahan 5.000 sebanyak ${pecahan5000}`)
    console.log(`Pecahan 100 sebanyak ${pecahan100}`)
    console.log(`Pecahan 50 sebanyak ${pecahan50}`)
}
main()