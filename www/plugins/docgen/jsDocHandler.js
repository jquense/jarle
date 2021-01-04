const Doclets = require('./doclets');

module.exports = function jsDocHandler(documentation) {
  const description = documentation.get('description') || '';

  const displayName = documentation.get('displayName');
  const tags = Doclets.parseTags(description);
  const displayNameTag = tags.find((t) => t.name === 'displayName');

  documentation.set('name', displayName);

  if (displayNameTag) {
    documentation.set('displayName', displayNameTag.value || displayName);
  }

  documentation.set('docblock', description);
  documentation.set('description', Doclets.cleanTags(description));

  documentation.set('tags', tags || []);

  // eslint-disable-next-line no-underscore-dangle
  documentation._props.forEach((_, name) => {
    const propDoc = documentation.getPropDescriptor(name);

    const propDescription = propDoc.description || '';
    const propTags = Doclets.parseTags(propDescription);

    propDoc.docblock = propDescription;
    propDoc.description = Doclets.cleanTags(propDescription);
    propDoc.tags = propTags || [];

    Doclets.applyPropTags(propDoc);
  });
};
