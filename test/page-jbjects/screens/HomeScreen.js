/* class HomeScreen {

    get signInButton(){
        return $('//android.widget.TextView[@text="Sign in"]');
    }
        async openSignInForm(){
        await this.signInButton.click();
    }

}
    export default new HomeScreen(); */

    class HomeScreen {
    get signInButton() {
        return $('//android.widget.TextView[@text="Sign in"]');
    }

    async openSignInForm() {
        try {
            await this.signInButton.waitForDisplayed({ timeout: 10000 });
            await this.signInButton.click();
        } catch (err) {
            throw new Error(`Sign in button not found or not clickable: ${err.message}`);
        }
    }
}

export default new HomeScreen();
