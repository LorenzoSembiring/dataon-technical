function main() {
    const email = "user@example.com"

    var res = email.replace(/^[^@]*@/, '');
    console.log(res)
}

main()