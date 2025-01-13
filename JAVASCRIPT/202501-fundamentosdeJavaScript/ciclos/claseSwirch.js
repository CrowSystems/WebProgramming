let expr = "Papayas"

switch(expr) {
    case "Naranjas":
        console.log("Las naranjas cuestan $20 el kilo");
        break;
    case "Manzanas":
        console.log("Las manzanas cuestan $ 43 el kilo");
        break;
    case "Plátanos":
        console.log("Los platanos estan en $ 30 el kilo");
        break;
    case "Papayas":
        console.log("Los mangos y las papayas cuestan $ 24 pesos el kilo");
        break;
    default:
        console.log(`Lo siento, no contamos con ${expr}`);
}