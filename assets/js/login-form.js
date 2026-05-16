document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.login_form');

    elements.forEach(element => {
        element.addEventListener('click', function () {
            createModal(`
                <div class="stater_plan__container">
                    <div class="stater_plan__top">
                        <h2>Login to Your Account</h2>
                        <p>Welcome back! Please enter your credentials to access your account.</p>
                    </div>
                    <div class="stater_plan__body">
                        <div style="position:relative;width:100%; min-height:650px;">
                            <div id="ele-iframe-loader" style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;background:#fff;z-index:1;">
                                <div style="width:40px;height:40px;border:3px solid #E5EAF1;border-top-color:#1F3A5F;border-radius:50%;animation:ele-spin 0.8s linear infinite;"></div>
                                <span style="font-size:14px;color:#1F3A5F;font-family:Montserrat,sans-serif;">
                                Loading login form...
                                </span>
                            </div>
                            <style>@keyframes ele-spin{to{transform:rotate(360deg)}}</style>
                            <iframe src="https://bookings.fabricdoctor.ca/login?embed=true"
                                style="border:none;width:100%;min-height:650px;display:block;"
                                scrolling="yes"
                                onload="var l=document.getElementById('ele-iframe-loader');if(l)l.remove();"
                            ></iframe>
                        </div>
                    </div>
                    <div class="stater_plan__footer">
                        <p>Need help? Call us at <a href="tel:+1-905-332-2477">+1-905-332-2477</a></p>
                    </div>
                </div>
            `);
        });
    });
});
