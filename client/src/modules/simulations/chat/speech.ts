
type DialogueItem = {
    scammer?: string;
    you?: string;
    modalText?: string;
};


const speech: { en: DialogueItem[]; hi: DialogueItem[]; pa: DialogueItem[] }[] = [
    // 🧩 Story 1
    // // 🧩 Story 4 (Investment Scam)
{
  en: [
    { scammer: 'Hello Sir! I have an exclusive stock market tip for you—guaranteed 3x returns in just one month!' },
    { you: 'Really? That sounds unbelievable. How does it work?' },
    { scammer: 'We have insider information about a company. If you invest ₹50,000 today, you’ll get back ₹1.5 lakh in 30 days.', modalText: '⚠️ Warning: Promises of “guaranteed returns” are a classic red flag. No legitimate investment is risk-free.' },
    { you: 'But isn’t insider trading illegal?' },
    { scammer: 'This isn’t insider trading, it’s “special market research.” Everyone in our group is making profits!' },
    { you: 'Hmm... but why are you offering this to me if it’s so profitable?' },
    { scammer: 'Because we only choose select clients. You’re lucky we contacted you today.', modalText: 'Notice how scammers use exclusivity and urgency to trap investors.' },
    { you: 'I’m still unsure. Can I get written documents or SEBI registration details of your firm?' },
    { scammer: 'Documents waste time. If you delay, you’ll miss this golden chance. Decide now!' },
    { you: 'No, I think I’ll check directly with SEBI before investing.' },
    { scammer: 'If you don’t act today, you’ll regret it when others double their money.', modalText: 'Scammers use fear of missing out (FOMO) to pressure victims.' },
    { you: 'It’s okay. I’d rather stay safe with my money than regret later.' }
  ],
  hi: [
    { scammer: 'नमस्ते सर! मेरे पास आपके लिए एक खास स्टॉक मार्केट टिप है—सिर्फ़ 1 महीने में 3 गुना रिटर्न गारंटी!' },
    { you: 'सच में? ये तो कमाल लग रहा है। कैसे होगा?' },
    { scammer: 'हमारे पास एक कंपनी की इनसाइडर जानकारी है। अगर आप आज ₹50,000 लगाएंगे, तो 30 दिन में ₹1.5 लाख मिलेगा।', modalText: '⚠️ चेतावनी: “गारंटीड रिटर्न” का वादा हमेशा धोखाधड़ी का संकेत है।' },
    { you: 'लेकिन इनसाइडर ट्रेडिंग तो गैरकानूनी है ना?' },
    { scammer: 'ये इनसाइडर नहीं, “स्पेशल रिसर्च” है। हमारे सभी क्लाइंट्स प्रॉफिट कमा रहे हैं!' },
    { you: 'अगर इतना प्रॉफिट है, तो आप मुझे क्यों बता रहे हैं?' },
    { scammer: 'क्योंकि हम सिर्फ चुनिंदा लोगों को मौका देते हैं। आज आप लकी हैं।', modalText: 'ध्यान दें: ठग अक्सर एक्सक्लूसिविटी और जल्दबाज़ी दिखाकर फँसाते हैं।' },
    { you: 'मुझे शक है। क्या आपके पास SEBI रजिस्ट्रेशन या कोई डॉक्यूमेंट है?' },
    { scammer: 'डॉक्यूमेंट्स में टाइम वेस्ट होता है। अगर देर करेंगे तो ये गोल्डन मौका चला जाएगा।' },
    { you: 'नहीं, मैं पहले SEBI से चेक करूँगा।' },
    { scammer: 'अगर आज नहीं किया तो दूसरों को पैसा दोगुना मिलता देख पछताएँगे।', modalText: 'FOMO (मौका छूटने का डर) ठगी में सबसे बड़ा हथियार है।' },
    { you: 'कोई बात नहीं, मेरे लिए सुरक्षा ज़्यादा ज़रूरी है।' }
  ],
  pa: [
    { scammer: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ ਜੀ! ਮੇਰੇ ਕੋਲ ਤੁਹਾਡੇ ਲਈ ਖਾਸ ਸਟਾਕ ਮਾਰਕੀਟ ਟਿਪ ਹੈ—ਸਿਰਫ਼ 1 ਮਹੀਨੇ ਵਿੱਚ 3 ਗੁਣਾ ਰਿਟਰਨ ਗਾਰੰਟੀ!' },
    { you: 'ਸੱਚ? ਇਹ ਤਾਂ ਕਮਾਲ ਲੱਗਦਾ ਹੈ। ਕਿਵੇਂ ਹੋਵੇਗਾ?' },
    { scammer: 'ਸਾਡੇ ਕੋਲ ਇੱਕ ਕੰਪਨੀ ਦੀ ਅੰਦਰਲੀ ਜਾਣਕਾਰੀ ਹੈ। ਜੇ ਤੁਸੀਂ ਅੱਜ ₹50,000 ਲਗਾਓਗੇ ਤਾਂ 30 ਦਿਨਾਂ ਵਿੱਚ ₹1.5 ਲੱਖ ਮਿਲੇਗਾ।', modalText: '⚠️ ਚੇਤਾਵਨੀ: “ਗਾਰੰਟੀਡ ਰਿਟਰਨ” ਦਾ ਵਾਅਦਾ ਹਮੇਸ਼ਾ ਠੱਗੀ ਦਾ ਸੰਕੇਤ ਹੁੰਦਾ ਹੈ।' },
    { you: 'ਪਰ ਇਨਸਾਈਡਰ ਟ੍ਰੇਡਿੰਗ ਤਾਂ ਗੈਰਕਾਨੂੰਨੀ ਹੈ?' },
    { scammer: 'ਇਹ ਇਨਸਾਈਡਰ ਨਹੀਂ, “ਸਪੈਸ਼ਲ ਰਿਸਰਚ” ਹੈ। ਸਾਡੇ ਸਾਰੇ ਕਸਟਮਰ ਫਾਇਦੇ ਵਿੱਚ ਹਨ!' },
    { you: 'ਜੇ ਇੰਨਾ ਫਾਇਦਾ ਹੈ ਤਾਂ ਤੁਸੀਂ ਮੈਨੂੰ ਕਿਉਂ ਦੱਸ ਰਹੇ ਹੋ?' },
    { scammer: 'ਕਿਉਂਕਿ ਅਸੀਂ ਸਿਰਫ਼ ਚੁਣਿੰਦੇ ਲੋਕਾਂ ਨੂੰ ਚਾਂਸ ਦਿੰਦੇ ਹਾਂ। ਅੱਜ ਤੁਸੀਂ ਲਕੀ ਹੋ।', modalText: 'ਧਿਆਨ ਰੱਖੋ: ਠੱਗ ਲੋਕ ਜਲਦੀ ਫੈਸਲਾ ਲੈਣ ਲਈ ਖਾਸਪਨ ਅਤੇ ਤੁਰੰਤਤਾ ਦਿਖਾਉਂਦੇ ਹਨ।' },
    { you: 'ਮੈਨੂੰ ਸ਼ੱਕ ਹੈ। ਕੀ ਤੁਹਾਡੇ ਕੋਲ SEBI ਰਜਿਸਟ੍ਰੇਸ਼ਨ ਜਾਂ ਦਸਤਾਵੇਜ਼ ਹਨ?' },
    { scammer: 'ਦਸਤਾਵੇਜ਼ਾਂ ਨਾਲ ਸਮਾਂ ਬਰਬਾਦ ਹੁੰਦਾ ਹੈ। ਜੇ ਦੇਰ ਕੀਤੀ ਤਾਂ ਇਹ ਸੋਨੇ ਦਾ ਮੌਕਾ ਹੱਥੋਂ ਨਿਕਲ ਜਾਵੇਗਾ।' },
    { you: 'ਨਹੀਂ, ਮੈਂ ਪਹਿਲਾਂ SEBI ਨਾਲ ਚੈਕ ਕਰਾਂਗਾ।' },
    { scammer: 'ਜੇ ਅੱਜ ਨਹੀਂ ਕੀਤਾ ਤਾਂ ਹੋਰਾਂ ਨੂੰ ਪੈਸਾ ਦੋਗੁਣਾ ਮਿਲਦਾ ਦੇਖ ਕੇ ਪਛਤਾਉਂਗੇ।', modalText: 'FOMO (ਮੌਕਾ ਹੱਥੋਂ ਨਿਕਲਣ ਦਾ ਡਰ) ਠੱਗੀ ਦਾ ਹਥਿਆਰ ਹੈ।' },
    { you: 'ਠੀਕ ਹੈ, ਮੇਰੇ ਲਈ ਸੁਰੱਖਿਆ ਵੱਧ ਜ਼ਰੂਰੀ ਹੈ।' }
  ]
}
]
   

export default speech;