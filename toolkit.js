function byId(elementId, self) {
  return (self ?? this).getRootNode().getElementById(elementId);
}
