const chatBody = document.querySelector(".chat-body");
const txtInput = document.querySelector("#txtInput");
const send = document.querySelector(".send");


/* max min button */

const container2 = document.querySelector('.container2');
const container = document.querySelector('.container');
const minimizeBtn = document.querySelector('#minimize');
const maximizeBtn = document.querySelector('#maximize');
const title = document.querySelector('.title');
const chatHeader = document.querySelector('.chat-header');

minimizeBtn.addEventListener('click', () => {

  container2.style.display = 'none';
  container.style.maxHeight = '7.1vh';
  container.style.opacity = "0.7";
 /*  chatHeader.style.display = "none"; */
  title.style.fontSize = "25px";
  chatHeader.style.maxHeight = '7.1vh';
  
  
  
});

maximizeBtn.addEventListener('click', () => {
  container2.style.display = 'block';
  container.style.maxHeight = '100vh';
  container.style.opacity = "1";
  title.style.fontSize = "15px";
  
});



/* end of max min button */

send.addEventListener("click", () => renderUserMessage());

txtInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    renderUserMessage();
  }
});

const renderUserMessage = () => {
  const userInput = txtInput.value;
  renderMessageEle(userInput, "user");
  txtInput.value = "";
  setTimeout(() => {
    renderChatbotResponse(userInput);
    setScrollPosition();
  }, 600);
};

const renderChatbotResponse = (userInput) => {
  const res = getChatbotResponse(userInput);
  renderMessageEle(res);
};

const renderMessageEle = (txt, type) => {
  let className = "user-message";
  if (type !== "user") {
    className = "chatbot-message";
  }
  const messageEle = document.createElement("div");
  const txtNode = document.createTextNode(txt);
  messageEle.classList.add(className);
  messageEle.append(txtNode);
  chatBody.append(messageEle);
};


/* original version */


/* const getChatbotResponse = (userInput) => {
  return responseObj[userInput] == undefined
    ? "Please try something else"
    : responseObj[userInput];
}; */




/* lowercase try */

/* function getChatbotResponse(input) {
  const inputLower = input.toLowerCase();
  for (const key in responseObj) {
    if (key.toLowerCase() === inputLower) { 
      return responseObj[key];
    }
  }
  
  return "I'm sorry, I don't understand. Please rephrase that.";
} */


/* end lowercase try */

function getChatbotResponse(input) {
  const inputLower = input.toLowerCase();
  for (const key in responseObj) {
    if (key.toLowerCase() === inputLower) {
      return responseObj[key];
    }
  }

  // Define a list of keywords and their corresponding responses
  const keywordResponses = {
    "help": "Sure, how can I assist you?",
    "greeting": "Hello there!",
    "bye": "Goodbye!",
    "order": "Can I have your order number please?",
    "human": "Here is the phone number for our help control center: +0234332100",
    "what is your name?": "My name is Chatbot.",
    "what can you do?": "I can assist you with a wide range of tasks and answer your questions on various topics.",
    "technical": "I'll do my best to help you with technical issues, but keep in mind that I may not be able to solve every problem.",
    "can you tell me a joke?": "Why did the tomato turn red? Because it saw the salad dressing!",
    "password": "Please provide me with your account details, and I'll guide you through the process.",
    "support": "You can find the contact information for our customer support team on our website or by typing 'customer support' in the chat.",
    "return": "Need to return a product?",
    "track": "Wondering about your order status?",
    "payment": "Experiencing payment issues?",
    "shipping": "When will your order arrive?",
    "free shipping": "Looking for free shipping options?",
    "discounts": "Current discounts available, check website or newsletter.",
    "availability": "Product availability varies, check website or contact customer support.",
    "sizes": "Sizes available vary by product, check product page.",
    "colors": "Colors available vary by product, check product page.",
    "reviews": "Check product page for customer reviews.",
    "warranty": "Warranty varies by product, check product page or contact customer support.",
    "contact": "Contact customer support via email, phone, or live chat.",
    "privacy": "Read our privacy policy on our website.",
    "security": "Website is secure with SSL encryption.",
    "account": "Create an account on our website for faster checkout and order history.",
    "newsletter": "Sign up for our newsletter on our website or during checkout.",
    "gift cards": "Gift cards available for purchase on our website.",
    "promotions": "Check website or sign up for newsletter for ongoing promotions.",
    "delivery": "Expedited delivery available for an additional fee, check website for details.",
    "cancel": "Would you like to cancel your order?",
    "feedback": "We value your feedback! Please take a moment to let us know how we're doing.",
    "menu": "You can find our menu on our website or by typing 'menu' in the chat.",
    "reservation": "Would you like to make a reservation?",
    "hours": "Our business hours are from 9am to 5pm, Monday through Friday.",
    "location": "You can find our location on our website or by typing 'location' in the chat.",
    "pricing": "Our pricing varies by product, check our website or contact customer support for details.",
    "returns policy": "Please review our returns policy on our website.",
    "customer service": "Our customer service team is available to assist you 24/7.",
    "refund": "Would you like to request a refund?",
    "exchange": "Would you like to request an exchange?",
    "tracking number": "Please provide your tracking number so we can assist you with tracking your order.",
    "product information": "You can find more information about our products on our website or by typing 'product information' in the chat.",
    "order status": "To check your order status, please provide your order number.",
    "shipping options": "We offer a variety of shipping options, including standard, expedited, and international. Check our website for details.",
    "payment options": "We accept a variety of payment methods, including credit cards and PayPal. Check our website for details.",
    "product recommendations": "Based on your previous purchases, we recommend these products for you.",
    "subscription": "Subscribe to our service to receive regular updates and exclusive content.",
    "loyalty program": "Join our loyalty program to earn rewards and exclusive discounts.",
    "technical support": "For technical support, please provide your device and software details so we can assist you better.",
    "troubleshooting": "Please try troubleshooting steps on our website or contact customer support for assistance.",
    "chat history": "You can find your chat history on our website or by typing 'chat history' in the chat.",
    "social media": "Follow us on social media for updates, promotions, and exclusive content.",
    "career": "Visit our career page on our website to view our current job openings.",
    "partnership": "Interested in a partnership or collaboration? Contact us for more information.",
    "donation": "Donate to our charity program to support a good cause.",
    "FAQ": "Check our FAQ page on our website for answers to frequently asked questions.",
    "terms and conditions": "Please review our terms and conditions on our website.",
    "user account": "You can manage your account settings, address book, and payment methods on our website.",
    "wishlist": "Create and manage your wishlist on our website.",
    "chatbot options": "You can customize your chatbot preferences, including language and theme, on our website.",
    "audio support": "We offer audio support for users who are visually impaired or have difficulty reading.",
    "video support": "We offer video support for users who prefer visual communication.",
    "multiple languages": "We offer support in multiple languages. Please let us know how we can assist you.",
    "price matching": "We offer price matching for certain products. Check our website for details.",
    "out of stock": "We apologize, but the item you are looking for is currently out of stock. Check back soon or contact customer support for alternatives."
    
    




    // Add more keywords and responses as needed
  };

  // Check if the input contains any of the specified keywords
  for (const keyword in keywordResponses) {
    if (inputLower.includes(keyword)) {
      return keywordResponses[keyword];
    }
  }

  // Check if the input is a mathematical expression
  const mathRegex = /(\d+)([\+\-\*\/])(\d+)/;
  const match = inputLower.match(mathRegex);
  if (match) {
    const num1 = parseFloat(match[1]);
    const operator = match[2];
    const num2 = parseFloat(match[3]);
    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        return "I'm sorry, I don't understand that operator.";
    }
    return `The result of ${num1} ${operator} ${num2} is ${result}.`;
  }

  return "I'm sorry, I don't understand. Please rephrase that.";
}








const setScrollPosition = () => {
  if (chatBody.scrollHeight > 0) {
    chatBody.scrollTop = chatBody.scrollHeight;
  }
};

/* ajax code */
/* 
const renderChatbotResponse = (userInput) => {
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'chatbot.php');
  xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function () {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      renderMessageEle(this.responseText);
    }
  }
  xhr.send('user_input=' + userInput);
} */
