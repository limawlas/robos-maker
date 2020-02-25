const readline = require('readline-sync')

function start() {
    const constent = {}

    constent.searchTerm = asKAndReturnSearchTerm()
    constent.prefix = asKAndReturnPrefix()

    function asKAndReturnSearchTerm() {
        return readline.question('Type a Wikipedia search term: ')
    }

    function asKAndReturnPrefix() { 
        const prefixes = ['Who is', 'What is', 'The history of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]

        return selectedPrefixText
    }

    console.log(constent)
}
start()