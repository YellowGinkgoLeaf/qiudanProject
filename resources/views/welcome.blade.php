<!DOCTYPE html>
<html>
    <head>
        <title>JustEatPotato的个人网站</title>

        <link href="assets/css/bootstrap.min.css" rel="stylesheet">
        <script data-main="assets/js/main" src="assets/js/require.js"></script>


    </head>
    <body>
        <textarea class="input-group-lg" data-bind="value:textKoBind"></textarea>
        <div data-bind="visible:textKoBind()">
            <span data-bind="text:$root.noGapBegin"></span>
        </div>
    </body>
</html>
