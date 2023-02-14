const notSupported = document.getElementById('notSupp');
notSupported.classList.toggle('hidden', 'serial' in navigator);

console.log(navigator.serial)


const myfunction = async function() {
    const port = await navigator.serial.requestPort();
    console.log(port)
}

myfunction()
