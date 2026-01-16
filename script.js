
    const angles = {
      "┌": [0,90], // "┌"
      "┐": [90,180], // "┐"
      "┘": [180,270], // "┘"
      "└": [0,270], // "└"
      "-": [0,180], // "-"
      "|": [90,270], // ""
      " ": [135,135] // " "
    }
    const numbers = {
        "4" : [
            "┌","┐","┌","┐",
            "|","|","|","|",
            "|","└","┘","|",
            "└","-","┐","|",
            " "," ","|","|",
            " "," ","└","┘"
        ],
        "8" : [
            "┌","-","-","┐",
            "|","┌","┐","|",
            "|","└","┘","|",
            "|","┌","┐","|",
            "|","└","┘","|",
            "└","-","-","┘"
        ],
        "0" : [
            "┌","-","-","┐",
            "|","┌","┐","|",
            "|","|","|","|",
            "|","|","|","|",
            "|","└","┘","|",
            "└","-","-","┘"
        ],
        "2" : [
            "┌","-","-","┐",
            "└","-","┐","|",
            "┌","-","┘","|",
            "|","┌","-","┘",
            "|","└","-","┐",
            "└","-","-","┘"
        ],
        "3" : [
            "┌","-","-","┐",
            "└","-","┐","|",
            "┌","-","┘","|",
            "└","-","┐","|",
            "┌","-","┘","|",
            "└","-","-","┘"
        ],
        "6" : [
            "┌","-","-","┐",
            "|","┌","-","┘",
            "|","└","-","┐",
            "|","┌","┐","|",
            "|","└","┘","|",
            "└","-","-","┘"
        ],
        "5" : [
            "┌","-","-","┐",
            "|","┌","-","┘",
            "|","└","-","┐",
            "└","-","┐","|",
            "┌","-","┘","|",
            "└","-","-","┘"
        ],
        "7" : [
            "┌","-","-","┐",
            "└","-","┐","|",
            " "," ","|","|",
            " "," ","|","|",
            " "," ","|","|",
            " "," ","└","┘"
        ],
         "9" : [
            "┌","-","-","┐",
            "|","┌","┐","|",
            "|","└","┘","|",
            "└","-","┐","|",
            "┌","-","┘","|",
            "└","-","-","┘"
        ],
        "1" : [
            "┌","-","┐"," ",
            "└","┐","|"," ",
            " ","|","|"," ",
            " ","|","|"," ",
            "┌","┘","└","┐",
            "└","-","-","┘"
        ],
    }
    
    
    const gridRow = document.getElementById(`grid-row`);
        // var angnum = numbers[value];
     for (let a = 0; a < 6; a++) {
        const digit = document.createElement("div");
        digit.className = "digit";
        
        // var angnum = numbers[value];
        // Create 24 boxes (4x6 grid)
        for (let i = 0; i < 24; i++) {
            const box = document.createElement("div");
            box.className = "clock";
            //box.style.backgroundColor = colors[i % colors.length];
            // var cellang = angnum[i];

            const line1 = document.createElement("div");
            line1.className = "hand";
            // var ang1 = angles[cellang][0]
            //   console.log(ang1)
            // line1.style.transform = `rotate(${angles[cellang][0]}deg)`;

            const line2 = document.createElement("div");
            line2.className = "hand";

            // line2.style.transform = `rotate(${angles[cellang][1]}deg)`;


            box.appendChild(line1);
            box.appendChild(line2);
            digit.appendChild(box);

        }
        gridRow.appendChild(digit);
    }

    
    let count = 1;
    const intervalId = setInterval(() => {
        const time = new Date().toLocaleTimeString("en-US", {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });

    var val = time.replace(/:/g, '')// Log time in HHMMSS format
    updateHands(count.toString(), val);
    count++;

    // if (count > 9) {
    //     clearInterval(intervalId); // Stop the interval when count exceeds 9
    //     console.log("Counting complete!");
    // }
    }, 1000); // 1000 milliseconds = 1 second
    const digit = gridRow.querySelectorAll('.digit');
    
    function updateHands(value, val) {
        //const angnum = numbers[value];
        
        for (let a = 0; a < 6; a++) {
            const angnum = numbers[val[a]];
            const clock = digit[a].querySelectorAll('.clock'); // or loop through multiple if needed
            for (let i = 0; i < 24; i++) {
                const hands = clock[i].querySelectorAll('.hand');
                const cellang = angnum[i];
                //const [line1, line2] = handPairs[i];
                hands[0].style.transform = `rotate(${angles[cellang][0]}deg)`;
                hands[1].style.transform = `rotate(${angles[cellang][1]}deg)`;
            }
        }
        
   }
