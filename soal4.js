function main() {
    const number = 1225441

    const array = [...number.toString()].map(Number);
    for (var i = 0; i < array.length; i++) {
        const element = array[i]
        process.stdout.write(element.toString());
        for (var j = array.length - 1; j > i ; j--) {
            
            process.stdout.write("0");
        }
        console.log("")
    }
}
main()