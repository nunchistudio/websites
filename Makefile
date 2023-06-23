.PHONY: sync/helix sync/hashibox

#
# Sync Markdown files and other assets related to helix.
#
sync/helix:
	bash ./domains/nunchi.studio/scripts/helix/sync.sh
	bash ./domains/go.nunchi.studio/scripts/helix/sync.sh
	bash ./domains/go.nunchi.studio/scripts/helix/godoc.sh

#
# Sync Markdown files and other assets related to HashiBox.
#
sync/hashibox:
	bash ./domains/nunchi.studio/scripts/hashibox/sync.sh
