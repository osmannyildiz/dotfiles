# Make exit work as a command in REPL
# https://stackoverflow.com/questions/9730409/exiting-from-python-command-line
type(exit).__repr__ = type(exit).__call__


# Import pprint by default
from pprint import pprint


