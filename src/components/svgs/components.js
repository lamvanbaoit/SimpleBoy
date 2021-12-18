import { RichTextEditor, Toolbar, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, HtmlEditor, QuickToolbar);

let defaultRTE = new RichTextEditor({
    inlineMode: {
        enable: true,
        onSelection: true
    }
});
defaultRTE.appendTo('#defaultRTE');