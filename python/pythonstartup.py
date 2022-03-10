# https://stackoverflow.com/questions/9730409/exiting-from-python-command-line
# Make exit work as a command
type(exit).__repr__ = type(exit).__call__

from pprint import pprint

