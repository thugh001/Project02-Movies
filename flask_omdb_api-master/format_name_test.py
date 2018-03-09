# -*- coding: utf-8 -*-

import unittest
from format_name import *

class Test_format_name(unittest.TestCase):
    def test_format_strip(self):
        self.assertEqual(format_name(u" Matrix "), "Matrix")

    def test_format_multiple_words(self):
        self.assertEqual(format_name(u"Sponge Bob"), "Sponge+Bob")

    def test_format_multiple_words_and_space(self):
        self.assertEqual(format_name(u"   Sponge Bob"), "Sponge+Bob")

    def test_format_accent(self):
        self.assertEqual(format_name(u"Ràinbow"), "Rainbow")

if __name__ == '__main__':
    unittest.main()
