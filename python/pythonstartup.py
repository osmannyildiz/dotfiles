# https://stackoverflow.com/questions/9730409/exiting-from-python-command-line
# Make exit work as expected
type(exit).__repr__ = type(exit).__call__

