function mostWordsFound(sentences) {
    const space = ' '
    let maxWords = 0
    
    sentences.map((sentence) => {
        let numWords = 1
        
        for (i = 0; i < sentence.length; i++) {
            if (sentence[i] === space) {
                numWords++
            }
            
            maxWords = Math.max(maxWords, numWords)
        }
    })
    
    return maxWords
};