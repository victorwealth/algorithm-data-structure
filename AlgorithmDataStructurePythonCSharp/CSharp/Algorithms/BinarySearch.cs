using System;
using System.Collections.Generic;
using System.Text;

namespace CSharp.Algorithms
{
    public class BinarySearch
    {
        private IList<int> _sortedList;
        private int _lookupItem;

        public BinarySearch(IList<int> sortedList, int lookupItem)
        {
            _sortedList = sortedList;
            _lookupItem = lookupItem;
        }

        public int Search()
        {
            int low = 0;
            int high = _sortedList.Count - 1;
            

            while (low <= high)
            {
                int mid = (low + high) / 2;

                if (_sortedList[mid] == _lookupItem) return mid;
                
                if (_sortedList[mid] > _lookupItem) 
                {
                    // lookup item is on the left side
                    high = mid - 1;
                }
                else // lookup item is on the right side
                {
                    low = mid + 1;
                }
            }

            return 0;
        }
    }
}
