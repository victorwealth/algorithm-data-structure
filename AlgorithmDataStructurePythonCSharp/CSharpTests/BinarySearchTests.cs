using System;
using Xunit;

using CSharp.Algorithms;
using System.Collections.Generic;

namespace CSharpTests
{
    public class BinarySearchTests
    {
        [Fact]
        public void Binary_Search_Returns_Index_Of_Lookup_Item()
        {
            var sortedList = new List<int> { 15, 20, 30, 45, 55, 60, 76, 84, 98, 100 };
            int lookupItem = 60;
            var binarySearch = new BinarySearch(sortedList, lookupItem);

            int expected = 5;
            var actual = binarySearch.Search();

            Assert.Equal(expected, actual);

        }

        [Fact]
        public void Binary_Search_Returns_Zero()
        {
            var sortedList = new List<int> { 15, 20, 30, 45, 55, 60, 76, 84, 98, 100 };
            int lookupItem = 200;
            var binarySearch = new BinarySearch(sortedList, lookupItem);

            int expected = 0;
            var actual = binarySearch.Search();

            Assert.Equal(expected, actual);

        }
    }
}


