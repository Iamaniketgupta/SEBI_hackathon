
type DialogueItem = {
    scammer?: string;
    you?: string;
    modalText?: string;
};


const speech: { en: DialogueItem[]; hi: DialogueItem[]; pa: DialogueItem[] }[] = [
    // 🧩 Story 1
    {
        en: [
            { scammer: 'Hey! I can help you get a loan approved instantly!' },
            { you: 'Really? I’ve been trying everywhere. How does it work?' },
            { scammer: 'It’s very simple. Just share your bank OTP so I can process the request for you.', modalText: '**Warning:** Asking for OTP is a red flag—they can misuse it to steal money.' },
            { you: 'Hmm... Are you sure this is safe? Why do you need my OTP?' },
            { scammer: 'Trust me, it’s a standard verification process. Without it, the system won’t approve the loan.' },
            { you: 'But shouldn’t the bank ask me directly instead of through someone else?' },
            { scammer: 'I do this every day for clients. It saves time—you don’t need to worry.', modalText: 'Notice how they try to sound experienced and casual to build trust.' },
            { you: 'Okay... but I’m still not comfortable sharing my OTP.' },
            { scammer: 'Look, if you don’t share now, the offer will expire, and you’ll have to apply again. Why waste the chance?' },
            { you: 'Hmm... I don’t know...' },
            { scammer: 'Come on, it’s just a small step! Do it now, and your loan will be approved in minutes.' },
            { you: 'No, sorry. I don’t feel right about this. I’ll contact my bank directly instead.' },
            { scammer: 'Suit yourself. But remember, this was a limited-time offer. You’re missing out.', modalText: 'When pressure fails, scammers may end with guilt-tripping or passive remarks.' },
            { you: 'It’s fine. I’d rather be safe than sorry.' }
        ]
        ,
        hi: [
            { scammer: 'अरे! मैं तुम्हारा लोन तुरंत पास करवा सकता हूँ!' },
            { you: 'सच में? मैं तो बहुत कोशिश कर रहा था। कैसे होगा ये?' },
            { scammer: 'बहुत आसान है। बस अपना बैंक का OTP बता दो, मैं सब प्रोसेस कर दूँगा।', modalText: '**चेतावनी:** OTP माँगना बड़ा संकेत है कि कुछ गड़बड़ है। इसका गलत इस्तेमाल हो सकता है।' },
            { you: 'हम्म... क्या ये सेफ है? OTP क्यों चाहिए?' },
            { scammer: 'भरोसा रखो, ये नॉर्मल वेरिफिकेशन प्रोसेस है। इसके बिना लोन अप्रूव नहीं होगा।' },
            { you: 'पर बैंक खुद मुझसे क्यों नहीं माँगता?' },
            { scammer: 'मैं ये रोज़ क्लाइंट्स के लिए करता हूँ। इसमें टाइम भी बचता है। चिंता मत करो।', modalText: 'ध्यान दें, ये खुद को एक्सपर्ट बताकर भरोसा दिलाता है।' },
            { you: 'ठीक है... पर OTP बताने में मुझे अभी भी डर लग रहा है।' },
            { scammer: 'अगर अभी नहीं बताया, तो ऑफर मिस हो जाएगा और फिर से अप्लाई करना पड़ेगा। क्यों मौका गवाना?' },
            { you: 'हम्म... समझ नहीं आ रहा...' },
            { scammer: 'अरे बस छोटी सी बात है! अभी बता दो, तुरंत अप्रूव हो जाएगा।' },
            { you: 'नहीं, माफ़ करना। मुझे ये ठीक नहीं लग रहा। मैं सीधे बैंक से बात करूँगा।' },
            { scammer: 'जैसी मर्ज़ी। पर ध्यान रहे, ये लिमिटेड टाइम ऑफर था। तुम मौका खो दोगे।', modalText: 'अक्सर जब दबाव काम नहीं करता, तो डर या गिल्ट का सहारा लेते हैं।' },
            { you: 'ठीक है, कोई बात नहीं। सुरक्षित रहना ज़्यादा ज़रूरी है।' }
        ]
        ,
        pa: [
            { scammer: 'ਹੈਲੋ! ਮੈਂ ਤੇਰਾ ਲੋਨ ਤੁਰੰਤ ਪਾਸ ਕਰਵਾ ਸਕਦਾ ਹਾਂ!' },
            { you: 'ਸੱਚੀ? ਮੈਂ ਤਾਂ ਕਈ ਥਾਵਾਂ ਤੋਂ ਕੋਸ਼ਿਸ਼ ਕਰ ਰਿਹਾ ਸੀ। ਕਿਵੇਂ ਕਰਨਾ ਹੈ?' },
            { scammer: 'ਬਹੁਤ ਆਸਾਨ ਹੈ। ਸਿਰਫ਼ ਆਪਣਾ ਬੈਂਕ OTP ਦੇ ਦੇ, ਮੈਂ ਫਾਇਲ ਲਗਾ ਦਿਆਂਗਾ।', modalText: '**ਚੇਤਾਵਨੀ:** OTP ਮੰਗਣਾ ਖਤਰੇ ਦੀ ਗੱਲ ਹੈ—ਇਸ ਨਾਲ ਖਾਤਾ ਖਾਲੀ ਕੀਤਾ ਜਾ ਸਕਦਾ ਹੈ।' },
            { you: 'ਹੱਮ... ਇਹ ਸੁਰੱਖਿਅਤ ਹੈ? OTP ਕਿਉਂ ਚਾਹੀਦਾ?' },
            { scammer: 'ਭਰੋਸਾ ਰੱਖ, ਇਹ ਨਾਰਮਲ ਪ੍ਰੋਸੈਸ ਹੈ। ਇਸ ਤੋਂ ਬਿਨਾ ਲੋਨ ਪਾਸ ਨਹੀਂ ਹੋ ਸਕਦਾ।' },
            { you: 'ਪਰ ਬੈਂਕ ਤਾਂ ਮੈਨੂੰ ਸਿੱਧਾ ਕਿਉਂ ਨਹੀਂ ਪੁੱਛਦਾ?' },
            { scammer: 'ਮੈਂ ਹਰ ਰੋਜ਼ ਕਸਟਮਰਾਂ ਲਈ ਕਰਦਾ ਹਾਂ। ਟਾਈਮ ਬਚਦਾ ਹੈ, ਚਿੰਤਾ ਨਾ ਕਰ।', modalText: 'ਆਪਣੇ ਆਪ ਨੂੰ ਐਕਸਪਰਟ ਦਿਖਾ ਕੇ ਭਰੋਸਾ ਬਣਾਉਂਦਾ ਹੈ।' },
            { you: 'ਠੀਕ ਹੈ... ਪਰ OTP ਦਿੰਦੇ ਡਰ ਲੱਗ ਰਿਹਾ ਹੈ।' },
            { scammer: 'ਹੁਣੇ ਨਾ ਦਿੱਤਾ ਤਾਂ ਚਾਂਸ ਮਿਸ ਹੋ ਜਾਏਗਾ। ਫਿਰ ਮੁੜ ਅਪਲਾਈ ਕਰਨਾ ਪਏਗਾ।' },
            { you: 'ਹੱਮ... ਪਤਾ ਨਹੀਂ...' },
            { scammer: 'ਆਹ ਛੋਟੀ ਜਿਹੀ ਗੱਲ ਹੈ! ਹੁਣੇ ਦੇ ਦੇ, ਤੁਰੰਤ ਲੋਨ ਮਿਲੇਗਾ।' },
            { you: 'ਨਹੀਂ, ਮਾਫ਼ ਕਰੀਂ। ਮੈਨੂੰ ਇਹ ਠੀਕ ਨਹੀਂ ਲੱਗਦਾ। ਮੈਂ ਆਪਣੇ ਬੈਂਕ ਨਾਲ ਗੱਲ ਕਰਾਂਗਾ।' },
            { scammer: 'ਤੇਰੀ ਮਰਜ਼ੀ। ਪਰ ਯਾਦ ਰੱਖ, ਇਹ ਲਿਮਿਟਡ ਟਾਈਮ ਔਫਰ ਸੀ। ਤੂੰ ਮੌਕਾ ਗਵਾ ਲਏਂਗਾ।', modalText: 'ਦਬਾਅ ਨਾ ਬਣੇ ਤਾਂ ਡਰ ਜਾਂ ਸ਼ਰਮ ਦੇ ਨਾਲ ਮਨਾਉਣ ਦੀ ਕੋਸ਼ਿਸ਼।' },
            { you: 'ਠੀਕ ਆ, ਕੋਈ ਗੱਲ ਨਹੀਂ। ਸੁਰੱਖਿਅਤ ਰਹਿਣਾ ਵਧੀਆ ਹੈ।' }
        ]

    },

    // 🧩 Story 2
    {
        en: [
            { scammer: 'Hi! Congrats, you’re one of our lucky winners—you just won a brand new iPhone!' },
            { you: 'Wow, really? That sounds amazing! What do I need to do?' },
            { scammer: 'It’s super easy! Just pay a small shipping fee of $5 and share your card details so we can send it right to your address.', modalText: '⚠️ Warning: Asking for card details is a classic scam tactic.' },
            { you: 'Hmm... why do I need to pay anything if it’s free?' },
            { scammer: 'It’s just for shipping and handling—everyone does it. Think about it: you get a $1000 phone for only $5!' },
            { you: 'But why can’t you deduct it from the prize money itself?' },
            { scammer: 'Sorry, the system doesn’t allow that. It has to be a separate payment to confirm your address.', modalText: 'Notice how they give fake “rules” to sound legitimate.' },
            { you: 'I see... but where did you get my number?' },
            { scammer: 'From our promotional database! You must have signed up somewhere. But hurry—this offer expires soon!' },
            { you: 'Hmm... I still feel unsure about giving my card info to someone I don’t know.' },
            { scammer: 'Come on! It’s only $5. Why would anyone scam for such a small amount? Don’t miss this chance!' },
            { you: 'I understand, but I’d rather be safe.' },
            { scammer: 'Fine, but remember, if you refuse now, we’ll have to give the prize to someone else.', modalText: 'Scammers often use pressure and guilt to push quick decisions.' },
            { you: 'That’s okay. I’d rather not risk my money and data.' },
            { scammer: 'Alright, your choice. But you’re missing a huge opportunity!' },
            { you: 'Maybe, but staying safe matters more to me. Goodbye.' }
        ]
        , hi: [
            { scammer: 'हाय! बधाई हो, आप हमारे लकी विनर्स में से एक हैं—आपने बिल्कुल नया iPhone जीता है!' },
            { you: 'सच में? कमाल है! मुझे क्या करना होगा?' },
            { scammer: 'बहुत आसान है! सिर्फ़ $5 की छोटी सी शिपिंग फीस दे दीजिए और अपने कार्ड की डिटेल्स बता दीजिए ताकि हम आपके पते पर भेज सकें।', modalText: '⚠️ चेतावनी: कार्ड डिटेल्स माँगना एक आम ठगी का तरीका है।' },
            { you: 'पर अगर ये फ्री है, तो मुझे पैसे क्यों देने पड़ेंगे?' },
            { scammer: 'ये सिर्फ़ शिपिंग और हैंडलिंग के लिए है—हर कोई ऐसा करता है। सोचिए, $1000 का फोन सिर्फ़ $5 में मिल रहा है!' },
            { you: 'आप इसे इनाम की रकम से ही क्यों नहीं काट लेते?' },
            { scammer: 'माफ़ कीजिए, सिस्टम में ऐसा ऑप्शन नहीं है। पता वेरिफ़ाई करने के लिए अलग पेमेंट ज़रूरी है।', modalText: 'ध्यान दें, ये झूठे नियम बताकर असली जैसा दिखाने की कोशिश करते हैं।' },
            { you: 'समझ गया... पर मेरा नंबर कहाँ से मिला आपको?' },
            { scammer: 'हमारी प्रमोशनल लिस्ट से! आपने कभी कहीं फॉर्म भरा होगा। जल्दी कीजिए—ऑफर खत्म होने वाला है!' },
            { you: 'मुझे अब भी किसी अनजान को कार्ड डिटेल्स देना ठीक नहीं लग रहा।' },
            { scammer: 'अरे यार! सिर्फ़ $5 है। इतनी छोटी रकम के लिए कौन ठगी करेगा? मौका मत गँवाइए!' },
            { you: 'समझ में आता है, पर मैं सेफ रहना चाहूँगा।' },
            { scammer: 'ठीक है, लेकिन याद रखिए अगर आपने मना कर दिया, तो हमें किसी और को देना पड़ेगा।', modalText: 'अक्सर ठग जल्दबाज़ी और गिल्ट ट्रिप का सहारा लेते हैं।' },
            { you: 'कोई बात नहीं, मैं रिस्क नहीं लेना चाहता।' },
            { scammer: 'जैसी आपकी मर्ज़ी। लेकिन आप बहुत बड़ा मौका खो रहे हैं!' },
            { you: 'हो सकता है, पर सुरक्षित रहना ज़्यादा ज़रूरी है। अलविदा।' }
        ]
        , pa: [
            { scammer: 'ਹਾਇ! ਵਧਾਈ ਹੋ, ਤੁਸੀਂ ਸਾਡੇ ਲਕੀ ਵਿਨਰਾਂ ਵਿੱਚੋਂ ਇੱਕ ਹੋ—ਤੁਸੀਂ ਨਵਾਂ iPhone ਜਿੱਤਿਆ ਹੈ!' },
            { you: 'ਸੱਚ? ਬਹੁਤ ਵਧੀਆ! ਮੈਨੂੰ ਕੀ ਕਰਨਾ ਪਵੇਗਾ?' },
            { scammer: 'ਬਹੁਤ ਆਸਾਨ ਹੈ! ਸਿਰਫ਼ $5 ਦੀ ਛੋਟੀ ਸ਼ਿਪਿੰਗ ਫੀ ਭਰੋ ਅਤੇ ਆਪਣੀਆਂ ਕਾਰਡ ਡੀਟੇਲਸ ਦਿਓ ਤਾਂ ਜੋ ਅਸੀਂ ਤੁਹਾਡੇ ਪਤੇ ਤੇ ਭੇਜ ਸਕੀਏ।', modalText: '⚠️ ਚੇਤਾਵਨੀ: ਕਾਰਡ ਡੀਟੇਲ ਮੰਗਣਾ ਆਮ ਠੱਗੀ ਦਾ ਹਥਕੰਡਾ ਹੈ।' },
            { you: 'ਜੇ ਇਹ ਮੁਫ਼ਤ ਹੈ ਤਾਂ ਫਿਰ ਪੈਸੇ ਕਿਉਂ?' },
            { scammer: 'ਇਹ ਸਿਰਫ਼ ਸ਼ਿਪਿੰਗ ਅਤੇ ਹੈਂਡਲਿੰਗ ਲਈ ਹੈ—ਹਰ ਕੋਈ ਕਰਦਾ ਹੈ। ਸੋਚ, $1000 ਦਾ ਫ਼ੋਨ ਸਿਰਫ਼ $5 ਵਿੱਚ!' },
            { you: 'ਤੁਸੀਂ ਇਹ ਰਕਮ ਇਨਾਮ ਵਿਚੋਂ ਕਿਉਂ ਨਹੀਂ ਕੱਟ ਲੈਂਦੇ?' },
            { scammer: 'ਮਾਫ ਕਰੀਏ, ਸਿਸਟਮ ਵਿੱਚ ਇਹ ਮੌਕਾ ਨਹੀਂ। ਪਤਾ ਵੈਰੀਫਾਈ ਕਰਨ ਲਈ ਅਲੱਗ ਭੁਗਤਾਨ ਲਾਜ਼ਮੀ ਹੈ।', modalText: 'ਇਹ ਨਕਲੀ ਨਿਯਮ ਦੱਸ ਕੇ ਸਹੀ ਲੱਗਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਦੇ ਹਨ।' },
            { you: 'ਠੀਕ... ਪਰ ਤੁਹਾਨੂੰ ਮੇਰਾ ਨੰਬਰ ਕਿੱਥੋਂ ਮਿਲਿਆ?' },
            { scammer: 'ਸਾਡੀ ਪ੍ਰੋਮੋਸ਼ਨਲ ਲਿਸਟ ਤੋਂ! ਤੁਸੀਂ ਕਦੇ ਫਾਰਮ ਭਰਿਆ ਹੋਵੇਗਾ। ਪਰ ਜਲਦੀ ਕਰੋ—ਆਫਰ ਖਤਮ ਹੋਣ ਵਾਲਾ ਹੈ!' },
            { you: 'ਫਿਰ ਵੀ, ਮੈਨੂੰ ਆਪਣੇ ਕਾਰਡ ਦੀ ਜਾਣਕਾਰੀ ਦੇਣ ਵਿੱਚ ਡਰ ਲੱਗ ਰਿਹਾ ਹੈ।' },
            { scammer: 'ਅਰੇ ਯਾਰ! ਸਿਰਫ਼ $5 ਦੀ ਗੱਲ ਹੈ। ਇੰਨੀ ਛੋਟੀ ਰਕਮ ਲਈ ਕੌਣ ਠੱਗੀ ਕਰੇਗਾ? ਮੌਕਾ ਨਾ ਗਵਾਓ!' },
            { you: 'ਸਮਝ ਆਉਂਦੀ ਹੈ, ਪਰ ਮੈਂ ਸੁਰੱਖਿਅਤ ਰਹਿਣਾ ਚਾਹੁੰਦਾ ਹਾਂ।' },
            { scammer: 'ਜਿਵੇਂ ਤੇਰੀ ਮਰਜ਼ੀ। ਪਰ ਯਾਦ ਰੱਖ, ਜੇ ਨਾ ਕੀਤਾ ਤਾਂ ਇਹ ਕਿਸੇ ਹੋਰ ਨੂੰ ਦੇਣਾ ਪਵੇਗਾ।', modalText: 'ਠੱਗ ਅਕਸਰ ਦਬਾਅ ਜਾਂ ਸ਼ਰਮ ਨਾਲ ਫੈਸਲਾ ਲਵਾਉਣ ਦੀ ਕੋਸ਼ਿਸ਼ ਕਰਦੇ ਹਨ।' },
            { you: 'ਕੋਈ ਗੱਲ ਨਹੀਂ, ਮੇਰੇ ਲਈ ਸੁਰੱਖਿਆ ਮਹੱਤਵਪੂਰਣ ਹੈ। ਅਲਵਿਦਾ।' }
        ]

    },
    // Story 3
    {
        en: [
            { scammer: 'Hello! We have a parcel for you, but it cannot be delivered until you pay a small verification fee of $10.' },
            { you: 'A verification fee? I wasn’t expecting any parcel. Who sent it?' },
            { scammer: 'It’s from an international courier. The system flagged it, so you must pay before delivery.', modalText: '⚠️ Warning: Genuine courier companies never ask for advance fees.' },
            { you: 'That sounds strange... can you show me proof of the parcel?' },
            { scammer: 'Unfortunately, we can’t share details until the fee is cleared. Pay now and you’ll get your parcel today itself.' },
            { you: 'But why should I pay if I don’t know what’s inside?' },
            { scammer: 'It’s just $10. Think about it—what if it’s something valuable? Don’t lose your chance.', modalText: 'Notice how they use curiosity and greed to manipulate.' },
            { you: 'Hmm... I don’t think this is right. I’ll contact the courier service directly.' },
            { scammer: 'If you delay, the parcel will be returned and you’ll never get it. Don’t regret later!' },
            { you: 'No, thanks. I’d rather not risk being scammed.' }
        ],
        hi: [
            { scammer: 'हैलो! आपके लिए एक पार्सल है, लेकिन इसे डिलीवर करने से पहले ₹800 का छोटा सा वेरिफ़िकेशन चार्ज देना होगा।' },
            { you: 'वेरिफ़िकेशन चार्ज? मैंने तो कोई पार्सल ऑर्डर नहीं किया। किसने भेजा है?' },
            { scammer: 'ये इंटरनेशनल कूरियर से है। सिस्टम ने इसे फ्लैग किया है, इसलिए आपको पहले पेमेंट करना होगा।', modalText: '⚠️ चेतावनी: असली कूरियर कंपनियाँ कभी एडवांस पेमेंट नहीं माँगतीं।' },
            { you: 'ये तो अजीब है... क्या आप कोई सबूत दिखा सकते हैं?' },
            { scammer: 'माफ़ कीजिए, जब तक चार्ज क्लियर नहीं होगा, हम डिटेल्स नहीं दिखा सकते। अभी पेमेंट कीजिए, आज ही पार्सल मिल जाएगा।' },
            { you: 'पर क्यों दूँ पैसे जब मुझे पता ही नहीं कि अंदर क्या है?' },
            { scammer: 'बस ₹800 है। सोचिए, अगर इसमें कोई कीमती चीज़ हो तो? मौका मत गँवाइए।', modalText: 'ध्यान दें, ये लालच और जिज्ञासा का इस्तेमाल करते हैं।' },
            { you: 'हम्म... मुझे ये सही नहीं लग रहा। मैं खुद कूरियर कंपनी से संपर्क करूँगा।' },
            { scammer: 'अगर देर हुई तो पार्सल वापस चला जाएगा और आपको कभी नहीं मिलेगा। बाद में पछताना मत!', },
            { you: 'नहीं, धन्यवाद। मुझे ठगी का रिस्क नहीं लेना।' }
        ],
        pa: [
            { scammer: 'ਹੈਲੋ! ਤੁਹਾਡੇ ਲਈ ਇੱਕ ਪਾਰਸਲ ਹੈ, ਪਰ ਡਿਲੀਵਰ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਤੁਹਾਨੂੰ $10 ਵੈਰੀਫਿਕੇਸ਼ਨ ਫੀ ਦੇਣੀ ਪਵੇਗੀ।' },
            { you: 'ਵੈਰੀਫਿਕੇਸ਼ਨ ਫੀ? ਮੈਂ ਤਾਂ ਕੋਈ ਪਾਰਸਲ ਆਰਡਰ ਨਹੀਂ ਕੀਤਾ। ਕਿਸ ਨੇ ਭੇਜਿਆ ਹੈ?' },
            { scammer: 'ਇਹ ਇੰਟਰਨੈਸ਼ਨਲ ਕੂਰੀਅਰ ਤੋਂ ਹੈ। ਸਿਸਟਮ ਨੇ ਇਸਨੂੰ ਫਲੈਗ ਕੀਤਾ ਹੈ, ਇਸ ਕਰਕੇ ਤੁਹਾਨੂੰ ਪਹਿਲਾਂ ਭੁਗਤਾਨ ਕਰਨਾ ਪਵੇਗਾ।', modalText: '⚠️ ਚੇਤਾਵਨੀ: ਅਸਲੀ ਕੂਰੀਅਰ ਕਦੇ ਪਹਿਲਾਂ ਫੀਸ ਨਹੀਂ ਮੰਗਦੇ।' },
            { you: 'ਇਹ ਤਾਂ ਅਜੀਬ ਹੈ... ਕੀ ਤੁਸੀਂ ਕੋਈ ਸਬੂਤ ਦਿਖਾ ਸਕਦੇ ਹੋ?' },
            { scammer: 'ਮਾਫ ਕਰਨਾ, ਜਦ ਤੱਕ ਭੁਗਤਾਨ ਨਹੀਂ ਕਰਦੇ, ਅਸੀਂ ਡੀਟੇਲਸ ਨਹੀਂ ਦਿਖਾ ਸਕਦੇ। ਹੁਣੇ ਭੁਗਤਾਨ ਕਰੋ, ਅੱਜ ਹੀ ਪਾਰਸਲ ਮਿਲ ਜਾਵੇਗਾ।' },
            { you: 'ਪਰ ਮੈਂ ਕਿਉਂ ਪੈਸੇ ਦਿਆਂ ਜਦੋਂ ਮੈਨੂੰ ਪਤਾ ਹੀ ਨਹੀਂ ਅੰਦਰ ਕੀ ਹੈ?' },
            { scammer: 'ਸਿਰਫ਼ $10 ਹੈ। ਸੋਚੋ, ਜੇ ਇਸ ਵਿੱਚ ਕੀਮਤੀ ਚੀਜ਼ ਹੋਵੇ ਤਾਂ? ਮੌਕਾ ਨਾ ਗਵਾਓ।', modalText: 'ਠੱਗ ਲੋਕ ਲਾਲਚ ਅਤੇ ਜਿਗਿਆਸਾ ਨਾਲ ਫਸਾਉਂਦੇ ਹਨ।' },
            { you: 'ਹੱਮ... ਮੈਨੂੰ ਇਹ ਠੀਕ ਨਹੀਂ ਲੱਗ ਰਿਹਾ। ਮੈਂ ਸਿੱਧਾ ਕੂਰੀਅਰ ਕੰਪਨੀ ਨਾਲ ਗੱਲ ਕਰਾਂਗਾ।' },
            { scammer: 'ਜੇ ਦੇਰ ਹੋਈ ਤਾਂ ਪਾਰਸਲ ਵਾਪਸ ਚਲਾ ਜਾਏਗਾ ਅਤੇ ਕਦੇ ਨਹੀਂ ਮਿਲੇਗਾ। ਬਾਅਦ ਵਿਚ ਪਛਤਾਉਂਗੇ!' },
            { you: 'ਨਹੀਂ, ਧੰਨਵਾਦ। ਮੈਂ ਠੱਗੀ ਦਾ ਖਤਰਾ ਨਹੀਂ ਲੈਣਾ।' }
        ]
    }
];

export default speech;