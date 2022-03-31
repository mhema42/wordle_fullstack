function LetterInput() {
    return (
        <>
            <select name="Letter" id="Letter">
                <option value=""># letters?</option>
                <option value="4">Play with 4-letter words</option>
                <option value="5">Play with 5-letter words</option>
                <option value="6">Play with 6-letter words</option>
            </select>
            <br />
            <select name="unique" id="unique">
                <option value="">Unique letters y/n?</option>
                <option value="yes">yes</option>
                <option value="no">no</option>
            </select>   
        </>
    );
}

export default LetterInput;