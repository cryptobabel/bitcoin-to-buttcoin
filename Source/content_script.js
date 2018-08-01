walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bLightning Network\b/g, "Reckless Network");
	v = v.replace(/\blightning network\b/g, "reckless network");
	v = v.replace(/\bLightning\b/g, "Reckless");
	v = v.replace(/\blightning\b/g, "reckless");
	v = v.replace(/\⚡/g, "Ѡ");

	textNode.nodeValue = v;
}
