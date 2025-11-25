const recursionProblems = [
    {
        id: 'q01',
        number: 'Q-01',
        title: 'Print N to 1',
        difficulty: 'easy',
        statement: 'Write a recursive function to print numbers from N down to 1.',
        approach: [
            '<strong>Base Case:</strong> If N is 0, return (stop).',
            '<strong>Action:</strong> Print N.',
            '<strong>Recursive Step:</strong> Call the function with N - 1.'
        ],
        code: `public void fun(int n) {
    if (n == 0) {
        return;
    }
    System.out.println(n);
    fun(n - 1);
}`,
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(N)'
    },
    {
        id: 'q02',
        number: 'Q-02',
        title: 'Print 1 to N',
        difficulty: 'easy',
        statement: 'Write a recursive function to print numbers from 1 up to N.',
        approach: [
            '<strong>Base Case:</strong> If N is 0, return.',
            '<strong>Recursive Step:</strong> Call the function with N - 1 first.',
            '<strong>Action:</strong> Print N (this happens when the stack unwinds).',
            'This demonstrates how code after the recursive call is executed on the way back.'
        ],
        code: `public void funRev(int n) {
    if (n == 0) {
        return;
    }
    funRev(n - 1);
    System.out.println(n);
}`,
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(N)'
    },
    {
        id: 'q03',
        number: 'Q-03',
        title: 'Product of N to 1 (Factorial)',
        difficulty: 'easy',
        statement: 'Calculate the product of numbers from N down to 1 (Factorial of N).',
        approach: [
            '<strong>Base Case:</strong> If N <= 1, return 1.',
            '<strong>Recursive Step:</strong> Return N * function(N - 1).'
        ],
        code: `public int fact(int n) {
    if (n <= 1) {
        return 1;
    }
    return n * fact(n - 1);
}`,
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(N)'
    },
    {
        id: 'q04',
        number: 'Q-04',
        title: 'Sum of N to 1',
        difficulty: 'easy',
        statement: 'Calculate the sum of numbers from N down to 1.',
        approach: [
            '<strong>Base Case:</strong> If N <= 1, return 1.',
            '<strong>Recursive Step:</strong> Return N + function(N - 1).'
        ],
        code: `public int sum(int n) {
    if (n <= 1) {
        return 1;
    }
    return n + sum(n - 1);
}`,
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(N)'
    },
    {
        id: 'q05',
        number: 'Q-05',
        title: 'Sum of Digits',
        difficulty: 'easy',
        statement: 'Calculate the sum of individual digits of a number.',
        approach: [
            '<strong>Base Case:</strong> If N is 0, return 0.',
            '<strong>Logic:</strong> The last digit is N % 10. The remaining number is N / 10.',
            '<strong>Recursive Step:</strong> Return (N % 10) + sumOfDigits(N / 10).'
        ],
        code: `public int sumOfDigits(int n) {
    if (n == 0) {
        return 0;
    }
    return (n % 10) + sumOfDigits(n / 10);
}`,
        timeComplexity: 'O(log N)',
        spaceComplexity: 'O(log N)'
    },
    {
        id: 'q06',
        number: 'Q-06',
        title: 'Product of Digits',
        difficulty: 'easy',
        statement: 'Calculate the product of individual digits of a number.',
        approach: [
            '<strong>Base Case:</strong> If N % 10 == N (single digit), return N.',
            '<strong>Recursive Step:</strong> Return (N % 10) * prodOfDigits(N / 10).'
        ],
        code: `public int prod(int n) {
    if (n % 10 == n) {
        return n;
    }
    return (n % 10) * prod(n / 10);
}`,
        timeComplexity: 'O(log N)',
        spaceComplexity: 'O(log N)'
    },
    {
        id: 'concept1',
        number: 'Concept',
        title: 'Passing Numbers',
        difficulty: 'concept',
        statement: 'Understanding the difference between n-- and --n in recursive calls.',
        approach: [
            '<strong>n-- (Post-decrement):</strong> Passes the value first, then subtracts. If you pass n-- to a recursive call, it passes the SAME value of N, leading to an infinite recursion (StackOverflow).',
            '<strong>--n (Pre-decrement):</strong> Subtracts first, then passes the new value. This is correct for recursion.',
            '<strong>n - 1:</strong> Also correct and preferred as it does not modify the original variable.'
        ],
        code: `public void concept(int n) {
    if (n == 0) return;
    
    // System.out.println(n);
    
    // concept(n--); // ERROR: Infinite recursion, stack overflow
    
    concept(--n); // Correct
    // OR
    // concept(n - 1); // Correct
}`,
        timeComplexity: 'N/A',
        spaceComplexity: 'N/A'
    },
    {
        id: 'q07',
        number: 'Q-07',
        title: 'Reverse a Number',
        difficulty: 'medium',
        statement: 'Reverse the digits of a given number. Example: 1234 -> 4321.',
        approach: [
            '<strong>Way 1 (Iterative-style Recursion):</strong> Use an external variable `sum`. Multiply `sum` by 10 and add the last digit at each step.',
            '<strong>Way 2 (Pure Recursion):</strong> Use a helper function. If a number has `digits` digits, the first digit contributes `digit * 10^(digits-1)`.'
        ],
        code: `// Way 1: Using static/external variable
static int sum = 0;
public void rev1(int n) {
    if (n == 0) return;
    int rem = n % 10;
    sum = sum * 10 + rem;
    rev1(n / 10);
}

// Way 2: Pure Recursion with Helper
public int rev2(int n) {
    // sometimes you might need additional arguments
    // in that case, make another function
    int digits = (int)(Math.log10(n)) + 1;
    return helper(n, digits);
}

private int helper(int n, int digits) {
    if (n % 10 == n) {
        return n;
    }
    int rem = n % 10;
    return rem * (int)(Math.pow(10, digits - 1)) + helper(n / 10, digits - 1);
}`,
        timeComplexity: 'O(log N)',
        spaceComplexity: 'O(log N)'
    },
    {
        id: 'q08',
        number: 'Q-08',
        title: 'Check Palindrome',
        difficulty: 'medium',
        statement: 'Check if a number is a palindrome (reads the same forwards and backwards).',
        approach: [
            '<strong>Logic:</strong> A number is a palindrome if the number equals its reverse.',
            '<strong>Step 1:</strong> Reverse the number using the logic from Q-07.',
            '<strong>Step 2:</strong> Compare the original number with the reversed number.'
        ],
        code: `public boolean palin(int n) {
    return n == rev(n);
}

public int rev(int n) {
    int digits = (int)(Math.log10(n)) + 1;
    return helper(n, digits);
}

private int helper(int n, int digits) {
    if (n % 10 == n) {
        return n;
    }
    int rem = n % 10;
    return rem * (int)(Math.pow(10, digits - 1)) + helper(n / 10, digits - 1);
}`,
        timeComplexity: 'O(log N)',
        spaceComplexity: 'O(log N)'
    },
    {
        id: 'q09',
        number: 'Q-09',
        title: 'Count Zeros',
        difficulty: 'easy',
        statement: 'Count the number of zeros in a given number. Example: 30204 -> 2.',
        approach: [
            '<strong>Base Case:</strong> If N is 0, return 0.',
            '<strong>Recursive Step:</strong> Check the last digit (N % 10).',
            'If it is 0, return 1 + count(N / 10).',
            'If it is not 0, return count(N / 10).'
        ],
        code: `public int count(int n) {
    return helper(n, 0);
}

// Special helper to handle the recursion carrying the count
private int helper(int n, int c) {
    if (n == 0) {
        return c;
    }
    
    int rem = n % 10;
    if (rem == 0) {
        return helper(n / 10, c + 1);
    }
    return helper(n / 10, c);
}`,
        timeComplexity: 'O(log N)',
        spaceComplexity: 'O(log N)'
    },
    {
        id: 'q10',
        number: 'Q-10',
        title: 'Count Steps to Reduce to Zero',
        difficulty: 'easy',
        statement: 'Given an integer num, return the number of steps to reduce it to zero. If even, divide by 2; if odd, subtract 1.',
        approach: [
            '<strong>Base Case:</strong> If num is 0, return steps.',
            '<strong>Recursive Step:</strong>',
            'If even: helper(num / 2, steps + 1)',
            'If odd: helper(num - 1, steps + 1)'
        ],
        code: `public int numberOfSteps(int num) {
    return helper(num, 0);
}

private int helper(int num, int steps) {
    if (num == 0) {
        return steps;
    }
    
    if (num % 2 == 0) {
        return helper(num / 2, steps + 1);
    }
    return helper(num - 1, steps + 1);
}`,
        timeComplexity: 'O(log N)',
        spaceComplexity: 'O(log N)'
    },
    {
        id: 'q11',
        number: 'Q-11',
        title: 'Sorted Array',
        difficulty: 'easy',
        statement: 'Check if a given array is sorted (strictly increasing) using recursion.',
        approach: [
            '<strong>Base Case:</strong> If index is at the last element (arr.length - 1), return true.',
            '<strong>Recursive Step:</strong> Check if arr[index] < arr[index + 1].',
            'If true, recurse for index + 1. If false, return false immediately.'
        ],
        code: `public boolean sorted(int[] arr, int index) {
    // Base Case
    if (index == arr.length - 1) {
        return true;
    }
    
    return arr[index] < arr[index + 1] && sorted(arr, index + 1);
}`,
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(N)'
    },
    {
        id: 'q12',
        number: 'Q-12',
        title: 'Linear Search',
        difficulty: 'easy',
        statement: 'Find if a target element exists in an array using recursion.',
        approach: [
            '<strong>Base Case:</strong> If index == arr.length, return false (not found).',
            '<strong>Check:</strong> If arr[index] == target, return true.',
            '<strong>Recursive Step:</strong> Return search(arr, target, index + 1).'
        ],
        code: `public boolean find(int[] arr, int target, int index) {
    if (index == arr.length) {
        return false;
    }
    
    return arr[index] == target || find(arr, target, index + 1);
}

public int findIndex(int[] arr, int target, int index) {
    if (index == arr.length) {
        return -1;
    }
    
    if (arr[index] == target) {
        return index;
    }
    
    return findIndex(arr, target, index + 1);
}`,
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(N)'
    },
    {
        id: 'q13',
        number: 'Q-13',
        title: 'Linear Search (Multiple Occurrences)',
        difficulty: 'medium',
        statement: 'Find all indices of a target element in an array.',
        approach: [
            '<strong>Strategy:</strong> Pass an ArrayList as an argument to store indices.',
            '<strong>Logic:</strong> If arr[index] == target, add index to the list.',
            '<strong>Recursive Step:</strong> Call function for index + 1, passing the same list.',
            '<strong>Return:</strong> The list containing all found indices.'
        ],
        code: `public ArrayList<Integer> findAllIndex(int[] arr, int target, int index, ArrayList<Integer> list) {
    if (index == arr.length) {
        return list;
    }
    
    if (arr[index] == target) {
        list.add(index);
    }
    
    return findAllIndex(arr, target, index + 1, list);
}`,
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(N)'
    },
    {
        id: 'q14',
        number: 'Q-14',
        title: 'Return ArrayList (Without Passing)',
        difficulty: 'medium',
        statement: 'Return a list of all indices of a target element, but WITHOUT passing the list as an argument.',
        approach: [
            '<strong>Concept:</strong> Create a new list inside the function body.',
            '<strong>Logic:</strong> If match found, add to local list.',
            '<strong>Recursive Step:</strong> Get the list from the recursive call (answers from below).',
            '<strong>Combine:</strong> Add all elements from the returned list to the local list.',
            '<strong>Return:</strong> The combined list.'
        ],
        code: `public ArrayList<Integer> findAllIndex2(int[] arr, int target, int index) {
    ArrayList<Integer> list = new ArrayList<>();
    
    if (index == arr.length) {
        return list;
    }
    
    // This will contain answer for that function call only
    if (arr[index] == target) {
        list.add(index);
    }
    
    ArrayList<Integer> ansFromBelow = findAllIndex2(arr, target, index + 1);
    
    list.addAll(ansFromBelow);
    
    return list;
}`,
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(N) - creating new objects at every step'
    },
    {
        id: 'q15',
        number: 'Q-15',
        title: 'Rotated Binary Search',
        difficulty: 'hard',
        statement: 'Search for a target in a rotated sorted array using recursion.',
        approach: [
            '<strong>Base Case:</strong> s > e -> return -1.',
            '<strong>Mid Check:</strong> If arr[mid] == target -> return mid.',
            '<strong>Case 1 (Left Sorted):</strong> If arr[s] <= arr[mid]: Check if target is in [s, mid]. Recurse left or right accordingly.',
            '<strong>Case 2 (Right Sorted):</strong> If arr[mid] <= arr[e]: Check if target is in [mid, e]. Recurse right or left accordingly.'
        ],
        code: `public int search(int[] arr, int target, int s, int e) {
    if (s > e) {
        return -1;
    }
    
    int mid = s + (e - s) / 2;
    if (arr[mid] == target) {
        return mid;
    }
    
    if (arr[s] <= arr[mid]) {
        if (target >= arr[s] && target <= arr[mid]) {
            return search(arr, target, s, mid - 1);
        } else {
            return search(arr, target, mid + 1, e);
        }
    }
    
    if (target >= arr[mid] && target <= arr[e]) {
        return search(arr, target, mid + 1, e);
    }
    
    return search(arr, target, s, mid - 1);
}`,
        timeComplexity: 'O(log N)',
        spaceComplexity: 'O(log N)'
    },
    {
        id: 'q16',
        number: 'Q-16',
        title: 'Triangle Pattern 1',
        difficulty: 'easy',
        statement: 'Print a right-angled triangle pattern using recursion. Example for r=4, c=0: ****, ***, **, *',
        approach: [
            '<strong>Analogy:</strong> Think of this like the Bubble Sort inner loop logic.',
            '<strong>Base Case:</strong> If r == 0, return.',
            '<strong>Logic:</strong> If c < r, print "*" and recurse with (r, c+1).',
            '<strong>Else:</strong> Print newline and recurse with (r-1, 0).'
        ],
        code: `public void triangle(int r, int c) {
    if (r == 0) {
        return;
    }
    
    if (c < r) {
        System.out.print("*");
        triangle(r, c + 1);
    } else {
        System.out.println();
        triangle(r - 1, 0);
    }
}`,
        timeComplexity: 'O(N^2)',
        spaceComplexity: 'O(N)'
    },
    {
        id: 'q17',
        number: 'Q-17',
        title: 'Triangle Pattern 2',
        difficulty: 'easy',
        statement: 'Print a normal right-angled triangle pattern using recursion. Example: *, **, ***, ****',
        approach: [
            '<strong>Logic:</strong> Similar to Pattern 1, but print AFTER the recursive call returns (on the way up the stack).',
            '<strong>Base Case:</strong> If r == 0, return.',
            '<strong>Recursive Step:</strong> If c < r, recurse (r, c+1) then print "*".',
            '<strong>Else:</strong> Recurse (r-1, 0) then print newline.'
        ],
        code: `public void triangle2(int r, int c) {
    if (r == 0) {
        return;
    }
    
    if (c < r) {
        triangle2(r, c + 1);
        System.out.print("*");
    } else {
        triangle2(r - 1, 0);
        System.out.println();
    }
}`,
        timeComplexity: 'O(N^2)',
        spaceComplexity: 'O(N)'
    },
    {
        id: 'q18',
        number: 'Q-18',
        title: 'Bubble Sort (Recursive)',
        difficulty: 'medium',
        statement: 'Implement Bubble Sort using recursion.',
        approach: [
            '<strong>Analogy:</strong> Same logic as the Triangle Pattern 1.',
            '<strong>Base Case:</strong> If r == 0, return.',
            '<strong>Inner Pass:</strong> If c < r, compare arr[c] and arr[c+1]. Swap if needed. Recurse (r, c+1).',
            '<strong>Outer Pass:</strong> If c == r, one pass is done. Recurse (r-1, 0).'
        ],
        code: `public void bubble(int[] arr, int r, int c) {
    if (r == 0) {
        return;
    }
    
    if (c < r) {
        if (arr[c] > arr[c + 1]) {
            // Swap
            int temp = arr[c];
            arr[c] = arr[c + 1];
            arr[c + 1] = temp;
        }
        bubble(arr, r, c + 1);
    } else {
        bubble(arr, r - 1, 0);
    }
}`,
        timeComplexity: 'O(N^2)',
        spaceComplexity: 'O(N)'
    },
    {
        id: 'q19',
        number: 'Q-19',
        title: 'Selection Sort (Recursive)',
        difficulty: 'medium',
        statement: 'Implement Selection Sort using recursion.',
        approach: [
            '<strong>Logic:</strong> Find the maximum element in the remaining array and swap it with the last element.',
            '<strong>Base Case:</strong> If r == 0, return.',
            '<strong>Finding Max:</strong> Use `c` to traverse. Keep track of `max` index.',
            '<strong>Swap:</strong> When c > r (end of pass), swap max element with element at r-1. Recurse (r-1, 0, 0).'
        ],
        code: `public void selection(int[] arr, int r, int c, int max) {
    if (r == 0) {
        return;
    }
    
    if (c < r) {
        if (arr[c] > arr[max]) {
            selection(arr, r, c + 1, c);
        } else {
            selection(arr, r, c + 1, max);
        }
    } else {
        // Swap max with last element of current range
        int temp = arr[max];
        arr[max] = arr[r - 1];
        arr[r - 1] = temp;
        
        selection(arr, r - 1, 0, 0);
    }
}`,
        timeComplexity: 'O(N^2)',
        spaceComplexity: 'O(N)'
    },
    {
        id: 'q20',
        number: 'Q-20',
        title: 'Merge Sort (Recursive)',
        difficulty: 'medium',
        statement: 'Implement the standard Merge Sort algorithm using recursion.',
        approach: [
            '<strong>Divide:</strong> Find the middle index.',
            '<strong>Recurse:</strong> Sort the left half and the right half.',
            '<strong>Merge:</strong> Create a new array. Compare elements from both sorted halves and place the smaller one into the new array.',
            '<strong>Copy:</strong> Copy remaining elements if any.'
        ],
        code: `public int[] mergeSort(int[] arr) {
    if (arr.length == 1) {
        return arr;
    }
    
    int mid = arr.length / 2;
    
    int[] left = mergeSort(Arrays.copyOfRange(arr, 0, mid));
    int[] right = mergeSort(Arrays.copyOfRange(arr, mid, arr.length));
    
    return merge(left, right);
}

private int[] merge(int[] first, int[] second) {
    int[] mix = new int[first.length + second.length];
    
    int i = 0; // pointer for first
    int j = 0; // pointer for second
    int k = 0; // pointer for mix
    
    while (i < first.length && j < second.length) {
        if (first[i] < second[j]) {
            mix[k] = first[i];
            i++;
        } else {
            mix[k] = second[j];
            j++;
        }
        k++;
    }
    
    // Copy remaining elements
    while (i < first.length) {
        mix[k] = first[i];
        i++;
        k++;
    }
    
    while (j < second.length) {
        mix[k] = second[j];
        j++;
        k++;
    }
    
    return mix;
}`,
        timeComplexity: 'O(N log N)',
        spaceComplexity: 'O(N)'
    },
    {
        id: 'q21',
        number: 'Q-21',
        title: 'In-place Merge Sort',
        difficulty: 'hard',
        statement: 'Implement Merge Sort without creating new arrays for every recursive call (modify the original array).',
        approach: [
            '<strong>Concept:</strong> Pass start and end indices (s, e) instead of slicing arrays.',
            '<strong>Base Case:</strong> If e - s == 1, return.',
            '<strong>Merge Step:</strong> Use a temporary array ONLY during the merge phase to store sorted elements, then copy them back to the original array.',
            'This reduces the overhead of creating many array objects, though space complexity is still O(N) for the mix array.'
        ],
        code: `public void mergeSortInPlace(int[] arr, int s, int e) {
    if (e - s == 1) {
        return;
    }
    
    int mid = (s + e) / 2;
    
    mergeSortInPlace(arr, s, mid);
    mergeSortInPlace(arr, mid, e);
    
    mergeInPlace(arr, s, mid, e);
}

private void mergeInPlace(int[] arr, int s, int m, int e) {
    int[] mix = new int[e - s];
    
    int i = s;
    int j = m;
    int k = 0;
    
    while (i < m && j < e) {
        if (arr[i] < arr[j]) {
            mix[k] = arr[i];
            i++;
        } else {
            mix[k] = arr[j];
            j++;
        }
        k++;
    }
    
    while (i < m) {
        mix[k] = arr[i];
        i++;
        k++;
    }
    
    while (j < e) {
        mix[k] = arr[j];
        j++;
        k++;
    }
    
    // Copy back to original array
    for (int l = 0; l < mix.length; l++) {
        arr[s + l] = mix[l];
    }
}`,
        timeComplexity: 'O(N log N)',
        spaceComplexity: 'O(N)'
    },
    {
        id: 'q22',
        number: 'Q-22',
        title: 'Quick Sort',
        difficulty: 'medium',
        statement: 'Implement Quick Sort using the partitioning logic.',
        approach: [
            '<strong>Pivot:</strong> Choose the middle element as the pivot.',
            '<strong>Partition:</strong> Move elements smaller than pivot to left, larger to right.',
            '<strong>Recurse:</strong> Apply Quick Sort to the left and right subarrays.',
            '<strong>Base Case:</strong> If low >= high, return.'
        ],
        code: `public void quickSort(int[] nums, int low, int high) {
    if (low >= high) {
        return;
    }
    
    int s = low;
    int e = high;
    int m = s + (e - s) / 2;
    int pivot = nums[m];
    
    while (s <= e) {
        // Find item on left that should be on right
        while (nums[s] < pivot) {
            s++;
        }
        // Find item on right that should be on left
        while (nums[e] > pivot) {
            e--;
        }
        
        if (s <= e) {
            int temp = nums[s];
            nums[s] = nums[e];
            nums[e] = temp;
            s++;
            e--;
        }
    }
    
    // Recurse
    quickSort(nums, low, e);
    quickSort(nums, s, high);
}`,
        timeComplexity: 'O(N log N) avg, O(N^2) worst',
        spaceComplexity: 'O(log N) stack'
    },
    {
        id: 'q23',
        number: 'Q-23',
        title: 'Skip a Character',
        difficulty: 'easy',
        statement: 'Given a string, return a new string with all occurrences of a specific character (e.g., "a") removed.',
        approach: [
            '<strong>Base Case:</strong> If the string is empty, return empty string.',
            '<strong>Recursive Step:</strong> Check the first character.',
            'If it is "a", skip it and recurse on the rest.',
            'If it is not "a", keep it and append the result of recursing on the rest.'
        ],
        code: `public void skip(String p, String up) {
    if (up.isEmpty()) {
        System.out.println(p);
        return;
    }
    
    char ch = up.charAt(0);
    
    if (ch == 'a') {
        skip(p, up.substring(1));
    } else {
        skip(p + ch, up.substring(1));
    }
}

public String skip(String up) {
    if (up.isEmpty()) {
        return "";
    }
    
    char ch = up.charAt(0);
    
    if (ch == 'a') {
        return skip(up.substring(1));
    } else {
        return ch + skip(up.substring(1));
    }
}`,
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(N)'
    },
    {
        id: 'q24',
        number: 'Q-24',
        title: 'Skip a String',
        difficulty: 'medium',
        statement: 'Given a string, remove all occurrences of a specific substring (e.g., "apple").',
        approach: [
            '<strong>Base Case:</strong> If string is empty, return empty string.',
            '<strong>Check:</strong> Does the string start with "apple"?',
            'If yes, skip 5 characters (length of "apple") and recurse.',
            'If no, keep the first character and recurse on substring(1).'
        ],
        code: `public String skipApple(String up) {
    if (up.isEmpty()) {
        return "";
    }
    
    if (up.startsWith("apple")) {
        return skipApple(up.substring(5));
    } else {
        return up.charAt(0) + skipApple(up.substring(1));
    }
}`,
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(N)'
    },
    {
        id: 'q25',
        number: 'Q-25',
        title: 'Skip String (Conditional)',
        difficulty: 'medium',
        statement: 'Skip "app" but NOT if it is part of "apple".',
        approach: [
            '<strong>Logic:</strong> Check if it starts with "app" AND NOT "apple".',
            'If true, skip "app" (3 chars).',
            'Else, keep the character and move 1 step.'
        ],
        code: `public String skipAppNotApple(String up) {
    if (up.isEmpty()) {
        return "";
    }
    
    if (up.startsWith("app") && !up.startsWith("apple")) {
        return skipAppNotApple(up.substring(3));
    } else {
        return up.charAt(0) + skipAppNotApple(up.substring(1));
    }
}`,
        timeComplexity: 'O(N)',
        spaceComplexity: 'O(N)'
    },
    {
        id: 'q26',
        number: 'Q-26',
        title: 'Subsequences',
        difficulty: 'medium',
        statement: 'Print all subsequences of a string. A subsequence is a sequence that can be derived from another sequence by deleting zero or more elements without changing the order of the remaining elements.',
        approach: [
            '<strong>Pattern:</strong> Take it or Leave it.',
            '<strong>Base Case:</strong> If input string is empty, print the processed string (p) and return.',
            '<strong>Recursive Step:</strong> Make two calls for each character:',
            '1. Include the character in the processed string.',
            '2. Exclude the character from the processed string.'
        ],
        code: `public void subseq(String p, String up) {
    if (up.isEmpty()) {
        System.out.println(p);
        return;
    }
    
    char ch = up.charAt(0);
    
    // Take it
    subseq(p + ch, up.substring(1));
    // Ignore it
    subseq(p, up.substring(1));
}`,
        timeComplexity: 'O(2^N)',
        spaceComplexity: 'O(N)'
    },
    {
        id: 'q27',
        number: 'Q-27',
        title: 'Subsequences (ArrayList)',
        difficulty: 'medium',
        statement: 'Return all subsequences of a string as an ArrayList.',
        approach: [
            '<strong>Logic:</strong> Similar to printing, but collect results in a list.',
            '<strong>Base Case:</strong> Return a list containing the processed string.',
            '<strong>Recursive Step:</strong> Get lists from left (take) and right (ignore) calls.',
            '<strong>Combine:</strong> Add all elements from right list to left list and return.'
        ],
        code: `public ArrayList<String> subseqRet(String p, String up) {
    if (up.isEmpty()) {
        ArrayList<String> list = new ArrayList<>();
        list.add(p);
        return list;
    }
    
    char ch = up.charAt(0);
    
    ArrayList<String> left = subseqRet(p + ch, up.substring(1));
    ArrayList<String> right = subseqRet(p, up.substring(1));
    
    left.addAll(right);
    return left;
}`,
        timeComplexity: 'O(2^N)',
        spaceComplexity: 'O(2^N)'
    },
    {
        id: 'q28',
        number: 'Q-28',
        title: 'Subsequences with ASCII',
        difficulty: 'medium',
        statement: 'Print all subsequences along with their ASCII values.',
        approach: [
            '<strong>Concept:</strong> You can cast a char to int to get its ASCII value: (int)ch.',
            '<strong>Choices:</strong> Now we have 3 choices for each character:',
            '1. Take the character.',
            '2. Take the ASCII value of the character.',
            '3. Ignore the character.'
        ],
        code: `public void subseqAscii(String p, String up) {
    if (up.isEmpty()) {
        System.out.println(p);
        return;
    }
    
    char ch = up.charAt(0);
    
    // Take char
    subseqAscii(p + ch, up.substring(1));
    // Take ASCII
    subseqAscii(p + (ch + 0), up.substring(1));
    // Ignore
    subseqAscii(p, up.substring(1));
}`,
        timeComplexity: 'O(3^N)',
        spaceComplexity: 'O(N)'
    },
    {
        id: 'q29',
        number: 'Q-29',
        title: 'Iterative Subsequences',
        difficulty: 'medium',
        statement: 'Print all subsequences using iteration (without recursion).',
        approach: [
            '<strong>Logic:</strong> Start with a list containing an empty string [" "].',
            'For every character in the input string:',
            '   Create a new copy of all existing strings in the list.',
            '   Append the current character to each of these copies.',
            '   Add these new strings back to the list.',
            '<strong>Example:</strong> [""] -> ["", "a"] -> ["", "a", "b", "ab"]'
        ],
        code: `public List<List<Integer>> subset(int[] arr) {
    List<List<Integer>> outer = new ArrayList<>();
    outer.add(new ArrayList<>());
    
    for (int num : arr) {
        int n = outer.size();
        for (int i = 0; i < n; i++) {
            List<Integer> internal = new ArrayList<>(outer.get(i));
            internal.add(num);
            outer.add(internal);
        }
    }
    return outer;
}`,
        timeComplexity: 'O(N * 2^N)',
        spaceComplexity: 'O(2^N)'
    },
    {
        id: 'q30',
        number: 'Q-30',
        title: 'Subsequences (Duplicates)',
        difficulty: 'hard',
        statement: 'Print all unique subsequences of a string/array that may contain duplicates.',
        approach: [
            '<strong>Issue:</strong> Standard iterative approach generates duplicates if input has duplicates.',
            '<strong>Fix:</strong> Sort the input first. If current element is same as previous, only add it to the newly generated subsets from the <em>previous step</em>, not all subsets.',
            '<strong>Pointers:</strong> Maintain start and end indices to track where the previous step added elements.'
        ],
        code: `public List<List<Integer>> subsetDuplicate(int[] arr) {
    Arrays.sort(arr);
    List<List<Integer>> outer = new ArrayList<>();
    outer.add(new ArrayList<>());
    
    int start = 0;
    int end = 0;
    
    for (int i = 0; i < arr.length; i++) {
        start = 0;
        // If current and previous element are same, s = e + 1
        if (i > 0 && arr[i] == arr[i-1]) {
            start = end + 1;
        }
        end = outer.size() - 1;
        
        int n = outer.size();
        for (int j = start; j < n; j++) {
            List<Integer> internal = new ArrayList<>(outer.get(j));
            internal.add(arr[i]);
            outer.add(internal);
        }
    }
    return outer;
}`,
        timeComplexity: 'O(N * 2^N)',
        spaceComplexity: 'O(2^N)'
    },
    {
        id: 'q31',
        number: 'Q-31',
        title: 'Permutations (Print)',
        difficulty: 'medium',
        statement: 'Print all permutations of a given string. A permutation is an arrangement of all characters in different orders.',
        approach: [
            '<strong>Base Case:</strong> If the unprocessed string is empty, print the processed string.',
            '<strong>Recursive Step:</strong> For each character in the unprocessed string:',
            '   - Extract that character.',
            '   - Add it to the processed string.',
            '   - Recursively call with the remaining unprocessed characters.',
            '<strong>Key Insight:</strong> At each level, we make N recursive calls (where N is the length of unprocessed string).'
        ],
        code: `public void permutations(String p, String up) {
    if (up.isEmpty()) {
        System.out.println(p);
        return;
    }
    
    char ch = up.charAt(0);
    
    // For each position in processed string (p)
    // Insert the current character and recurse
    for (int i = 0; i <= p.length(); i++) {
        String first = p.substring(0, i);
        String second = p.substring(i, p.length());
        permutations(first + ch + second, up.substring(1));
    }
}

// Usage: permutations("", "abc");`,
        timeComplexity: 'O(N!)',
        spaceComplexity: 'O(N)'
    },
    {
        id: 'q32',
        number: 'Q-32',
        title: 'Permutations (ArrayList)',
        difficulty: 'medium',
        statement: 'Return all permutations of a given string as an ArrayList.',
        approach: [
            '<strong>Base Case:</strong> If unprocessed string is empty, return a list containing the processed string.',
            '<strong>Recursive Step:</strong> Create an empty answer list.',
            'For each position i in the processed string:',
            '   - Insert current character at position i.',
            '   - Recursively get all permutations of remaining characters.',
            '   - Add all returned permutations to the answer list.',
            '<strong>Return:</strong> The combined answer list.'
        ],
        code: `public ArrayList<String> permutationsList(String p, String up) {
    if (up.isEmpty()) {
        ArrayList<String> list = new ArrayList<>();
        list.add(p);
        return list;
    }
    
    char ch = up.charAt(0);
    ArrayList<String> ans = new ArrayList<>();
    
    // For each position in processed string
    for (int i = 0; i <= p.length(); i++) {
        String first = p.substring(0, i);
        String second = p.substring(i, p.length());
        
        // Get all permutations by inserting ch at position i
        ArrayList<String> result = permutationsList(first + ch + second, up.substring(1));
        ans.addAll(result);
    }
    
    return ans;
}

// Usage: ArrayList<String> result = permutationsList("", "abc");`,
        timeComplexity: 'O(N!)',
        spaceComplexity: 'O(N!) for storing all permutations'
    },
    {
        id: 'q33',
        number: 'Q-33',
        title: 'Count Permutations',
        difficulty: 'easy',
        statement: 'Count the total number of permutations of a given string without generating them.',
        approach: [
            '<strong>Base Case:</strong> If unprocessed string is empty, return 1 (one valid permutation found).',
            '<strong>Recursive Step:</strong> Initialize count = 0.',
            'For each position i in the processed string:',
            '   - Insert current character at position i.',
            '   - Add the count returned by recursive call to total count.',
            '<strong>Return:</strong> Total count.',
            '<strong>Mathematical Insight:</strong> For a string of length N, there are N! permutations.'
        ],
        code: `public int permutationsCount(String p, String up) {
    if (up.isEmpty()) {
        return 1;
    }
    
    int count = 0;
    char ch = up.charAt(0);
    
    // For each position in processed string
    for (int i = 0; i <= p.length(); i++) {
        String first = p.substring(0, i);
        String second = p.substring(i, p.length());
        count += permutationsCount(first + ch + second, up.substring(1));
    }
    
    return count;
}

// Usage: int total = permutationsCount("", "abc"); // Returns 6`,
        timeComplexity: 'O(N!)',
        spaceComplexity: 'O(N)'
    },
    {
        id: 'q34',
        number: 'Q-34',
        title: 'Phone Number Combinations',
        difficulty: 'medium',
        statement: 'Given a string containing digits from 2-9, return all possible letter combinations that the number could represent (like on a phone keypad). Example: "23" → ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]',
        approach: [
            '<strong>Mapping:</strong> Create a mapping of digits to letters (2→abc, 3→def, etc.).',
            '<strong>Base Case:</strong> If the input digit string is empty, print/return the processed string.',
            '<strong>Recursive Step:</strong> Get the first digit and its corresponding letters.',
            'For each letter in that mapping:',
            '   - Add the letter to processed string.',
            '   - Recursively call with remaining digits.',
            '<strong>Key Insight:</strong> This is similar to permutations but with variable choices per position.'
        ],
        code: `public void letterCombinations(String p, String up) {
    if (up.isEmpty()) {
        System.out.println(p);
        return;
    }
    
    // Get the first digit
    int digit = up.charAt(0) - '0';
    
    // Calculate the range of letters for this digit
    // For digit 2: (2-2)*3 = 0, so 'a' + 0 = 'a' to 'a' + 2 = 'c'
    // For digit 3: (3-2)*3 = 3, so 'a' + 3 = 'd' to 'a' + 5 = 'f'
    for (int i = (digit - 2) * 3; i < (digit - 1) * 3; i++) {
        char ch = (char) ('a' + i);
        letterCombinations(p + ch, up.substring(1));
    }
}

// Usage: letterCombinations("", "23");`,
        timeComplexity: 'O(4^N) worst case (digit 7 and 9 have 4 letters)',
        spaceComplexity: 'O(N)'
    },
    {
        id: 'q35',
        number: 'Q-35',
        title: 'Phone Combinations (ArrayList)',
        difficulty: 'medium',
        statement: 'Return all letter combinations of a phone number as an ArrayList.',
        approach: [
            '<strong>Base Case:</strong> If digit string is empty, return a list containing the processed string.',
            '<strong>Recursive Step:</strong> Create an empty answer list.',
            'Get the first digit and its letter range.',
            'For each letter:',
            '   - Recursively get combinations for remaining digits.',
            '   - Add all returned combinations to answer list.',
            '<strong>Return:</strong> The combined answer list.'
        ],
        code: `public ArrayList<String> letterCombinationsList(String p, String up) {
    if (up.isEmpty()) {
        ArrayList<String> list = new ArrayList<>();
        list.add(p);
        return list;
    }
    
    int digit = up.charAt(0) - '0';
    ArrayList<String> ans = new ArrayList<>();
    
    // For each letter corresponding to this digit
    for (int i = (digit - 2) * 3; i < (digit - 1) * 3; i++) {
        char ch = (char) ('a' + i);
        ArrayList<String> result = letterCombinationsList(p + ch, up.substring(1));
        ans.addAll(result);
    }
    
    return ans;
}

// Usage: ArrayList<String> result = letterCombinationsList("", "23");`,
        timeComplexity: 'O(4^N)',
        spaceComplexity: 'O(4^N) for storing all combinations'
    },
    {
        id: 'q36',
        number: 'Q-36',
        title: 'Phone Combinations Count',
        difficulty: 'easy',
        statement: 'Count the total number of letter combinations for a phone number without generating them.',
        approach: [
            '<strong>Base Case:</strong> If digit string is empty, return 1.',
            '<strong>Recursive Step:</strong> Initialize count = 0.',
            'For each letter corresponding to the first digit:',
            '   - Add the count from recursive call to total.',
            '<strong>Return:</strong> Total count.',
            '<strong>Optimization:</strong> Count = (letters for digit 1) × (letters for digit 2) × ...'
        ],
        code: `public int letterCombinationsCount(String p, String up) {
    if (up.isEmpty()) {
        return 1;
    }
    
    int count = 0;
    int digit = up.charAt(0) - '0';
    
    // For each letter corresponding to this digit
    for (int i = (digit - 2) * 3; i < (digit - 1) * 3; i++) {
        char ch = (char) ('a' + i);
        count += letterCombinationsCount(p + ch, up.substring(1));
    }
    
    return count;
}

// Usage: int total = letterCombinationsCount("", "23"); // Returns 9`,
        timeComplexity: 'O(4^N)',
        spaceComplexity: 'O(N)'
    },
    {
        id: 'q37',
        number: 'Q-37',
        title: 'Dice Combinations',
        difficulty: 'medium',
        statement: 'Find all possible combinations of dice rolls that sum to a target. Each die shows values 1-6. Example: target=4 → ["1111", "112", "121", "211", "13", "31", "22", "4"]',
        approach: [
            '<strong>Parameters:</strong> processed string (p), target remaining.',
            '<strong>Base Case:</strong> If target = 0, print/return the processed string.',
            '<strong>Invalid Case:</strong> If target < 0, return (invalid path).',
            '<strong>Recursive Step:</strong> Try all dice values from 1 to 6:',
            '   - Add the value to processed string.',
            '   - Recursively call with (target - value).',
            '<strong>Variation:</strong> Can be extended to custom number of faces.'
        ],
        code: `public void dice(String p, int target) {
    if (target == 0) {
        System.out.println(p);
        return;
    }
    
    // Try all possible dice values (1 to 6)
    for (int i = 1; i <= 6 && i <= target; i++) {
        dice(p + i, target - i);
    }
}

// With custom faces
public void diceCustom(String p, int target, int faces) {
    if (target == 0) {
        System.out.println(p);
        return;
    }
    
    // Try all possible values (1 to faces)
    for (int i = 1; i <= faces && i <= target; i++) {
        diceCustom(p + i, target - i, faces);
    }
}

// Usage: dice("", 4);
// Usage: diceCustom("", 4, 8); // 8-sided dice`,
        timeComplexity: 'O(6^target) or O(faces^target)',
        spaceComplexity: 'O(target)'
    },
    {
        id: 'q38',
        number: 'Q-38',
        title: 'Dice Combinations (ArrayList)',
        difficulty: 'medium',
        statement: 'Return all dice combinations that sum to target as an ArrayList.',
        approach: [
            '<strong>Base Case:</strong> If target = 0, return list containing processed string.',
            '<strong>Recursive Step:</strong> Create empty answer list.',
            'For each dice value from 1 to 6 (or custom faces):',
            '   - Recursively get combinations for (target - value).',
            '   - Add all returned combinations to answer list.',
            '<strong>Return:</strong> The answer list.'
        ],
        code: `public ArrayList<String> diceList(String p, int target) {
    if (target == 0) {
        ArrayList<String> list = new ArrayList<>();
        list.add(p);
        return list;
    }
    
    ArrayList<String> ans = new ArrayList<>();
    
    // Try all possible dice values
    for (int i = 1; i <= 6 && i <= target; i++) {
        ArrayList<String> result = diceList(p + i, target - i);
        ans.addAll(result);
    }
    
    return ans;
}

// With custom faces
public ArrayList<String> diceListCustom(String p, int target, int faces) {
    if (target == 0) {
        ArrayList<String> list = new ArrayList<>();
        list.add(p);
        return list;
    }
    
    ArrayList<String> ans = new ArrayList<>();
    
    for (int i = 1; i <= faces && i <= target; i++) {
        ArrayList<String> result = diceListCustom(p + i, target - i, faces);
        ans.addAll(result);
    }
    
    return ans;
}

// Usage: ArrayList<String> result = diceList("", 4);`,
        timeComplexity: 'O(6^target)',
        spaceComplexity: 'O(6^target) for storing combinations'
    }
];

function renderRecursionProblems() {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = '';

    recursionProblems.forEach(problem => {
        const section = document.createElement('section');
        section.id = problem.id;
        section.className = 'problem-section';

        // Handle concept type differently if needed, or just use standard layout
        const isConcept = problem.difficulty === 'concept';

        section.innerHTML = `
            <div class="problem-header">
                <span class="problem-number">${problem.number}</span>
                <h2>${problem.title}</h2>
                <span class="difficulty ${problem.difficulty}">${problem.difficulty}</span>
            </div>
            
            <div class="content-card">
                <h3>${isConcept ? 'Concept Explanation' : 'Problem Statement'}</h3>
                <p>${problem.statement}</p>
            </div>

            <div class="content-card">
                <h3>${isConcept ? 'Key Points' : 'Approach'}</h3>
                <ul class="approach-list">
                    ${problem.approach.map(step => `<li>${step}</li>`).join('')}
                </ul>
            </div>

            <div class="code-card">
                <div class="code-header">
                    <span class="code-lang">Java</span>
                    <button class="copy-btn" onclick="copyCode(this)">Copy</button>
                </div>
                <pre><code class="language-java">${escapeHtml(problem.code)}</code></pre>
            </div>

            <div class="complexity-card">
                <div class="complexity-item">
                    <strong>Time Complexity:</strong> ${problem.timeComplexity}
                </div>
                <div class="complexity-item">
                    <strong>Space Complexity:</strong> ${problem.spaceComplexity}
                </div>
            </div>
        `;

        mainContent.appendChild(section);
    });

    if (window.Prism) {
        Prism.highlightAll();
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

document.addEventListener('DOMContentLoaded', renderRecursionProblems);
