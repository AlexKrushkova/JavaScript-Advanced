function solution() {
    let addBtn = document.querySelector(".card > div > button");
    let inputGiftName = document.querySelector(".card > div > input");

    let listOfGifts = document.querySelector(".card > ul");
    let giftList = [];

    let sentGifts = document.querySelector("body > div > section:nth-child(3) > ul");
    let discaredGifts = document.querySelector("body > div > section:nth-child(4) > ul");

    addBtn.addEventListener("click", createGift);

    function createGift(e) { // e.preventDefault();
        listOfGifts.innerHTML = "";
        let giftName = inputGiftName.value;
        giftList.push(giftName);

        giftList.sort((a, b) => a.localeCompare(b));
        for (let i = 0; i < giftList.length; i++) {
            let currGift = giftList[i];

            let newItemList = document.createElement("li");
            newItemList.classList.add("gift");
            newItemList.textContent = currGift;

            let sendButton = document.createElement("button");
            sendButton.id = "sendButton";
            sendButton.innerText = "Send";

            let discardButton = document.createElement("button");
            discardButton.id = "discardButton";
            discardButton.innerText = "Discard";

            newItemList.appendChild(sendButton);
            newItemList.appendChild(discardButton);

            listOfGifts.appendChild(newItemList);
            inputGiftName.value = "";


            sendButton.addEventListener("click", function () {
                listOfGifts.removeChild(newItemList);
                newItemList.removeChild(sendButton);
                newItemList.removeChild(discardButton);
                sentGifts.appendChild(newItemList);
                giftList = [];
            });

            discardButton.addEventListener("click", function(){
                listOfGifts.removeChild(newItemList);
                newItemList.removeChild(sendButton);
                newItemList.removeChild(discardButton);
                discaredGifts.appendChild(newItemList);
                giftList = [];
            })
        }
    }
}
