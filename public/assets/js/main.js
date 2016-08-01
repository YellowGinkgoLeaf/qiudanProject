/**
 * Created by Administrator on 2016/5/30.
 */
requirejs.config({
    paths :　{
        knockout : 'knockout-3.4.0' ,
        jquery : 'jquery-2.2.4.min' ,
        bootstrap :  'bootstrap.min'
    }
});

require(["jquery","knockout","bootstrap"],function ($,ko) {
    function TestKoBind()
    {
        var self = this;
        var reg = new RegExp("^\s","g");
        self.textKoBind = ko.observable();
        self.noGapBegin = ko.observable("");
        switch (true) {
            case reg.test(self.textKoBind()) :
                self.noGapBegin("请不要在输入的文字开头留空白");
                break;
            default :
                break;
        }
    }

    var testJoBind = new TestKoBind();
    ko.applyBindings(testJoBind);
});