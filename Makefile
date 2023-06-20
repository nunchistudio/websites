.PHONY: sync/hashibox sync/temporalland

#
# Sync Markdown files and other assets related to helix.
#
sync/helix:
	bash ./domains/nunchi.studio/scripts/sync.sh
	bash ./domains/go.nunchi.studio/scripts/sync.sh

#
# Sync Markdown files and other assets related to HashiBox.
#
sync/hashibox:
	bash ./domains/hashibox.sh/scripts/sync.sh

#
# Sync Markdown files and other assets related to Temporal Land.
#
sync/temporalland:
	bash ./domains/temporal.land/scripts/sync.sh
	bash ./domains/go.temporal.land/scripts/sync.sh
