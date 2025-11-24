const courseTopics = [
    {
        id: 1,
        title: "OOP Introduction",
        content: `
            <h4>What is Object-Oriented Programming?</h4>
            <p>Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data (fields/attributes) and code (methods/functions).</p>
            
            <h4>Why OOP?</h4>
            <ul>
                <li><strong>Modularity:</strong> Code is organized into self-contained objects</li>
                <li><strong>Reusability:</strong> Objects can be reused across programs</li>
                <li><strong>Maintainability:</strong> Easier to modify and debug</li>
                <li><strong>Real-world modeling:</strong> Maps closely to real-world entities</li>
            </ul>
            
            <h4>Four Pillars of OOP</h4>
            <ul>
                <li><strong>Encapsulation:</strong> Bundling data and methods together</li>
                <li><strong>Inheritance:</strong> Creating new classes from existing ones</li>
                <li><strong>Polymorphism:</strong> Objects taking many forms</li>
                <li><strong>Abstraction:</strong> Hiding complex implementation details</li>
            </ul>
        `
    },
    {
        id: 2,
        title: "Java Classes",
        content: `
            <h4>What is a Class?</h4>
            <p>A class is a <strong>blueprint</strong> or <strong>template</strong> for creating objects. It defines the structure and behavior that objects of that type will have.</p>
            
            <h4>Class Syntax</h4>
            <pre><code class="language-java">class ClassName {
    // Instance variables (attributes/fields)
    dataType variable1;
    dataType variable2;
    
    // Constructor
    ClassName() {
        // initialization code
    }
    
    // Methods (behaviors)
    returnType methodName() {
        // method body
    }
}</code></pre>
            
            <h4>Components of a Class</h4>
            <ul>
                <li><strong>Fields/Attributes:</strong> Variables that hold the state of an object</li>
                <li><strong>Constructors:</strong> Special methods to initialize objects</li>
                <li><strong>Methods:</strong> Functions that define object behavior</li>
            </ul>
        `
    },
    {
        id: 3,
        title: "Example of a Class",
        content: `
            <h4>Real-World Example: Student Class</h4>
            <pre><code class="language-java">class Student {
    // Instance variables
    String name;
    int rollNumber;
    float marks;
    
    // Constructor
    Student(String name, int rollNumber, float marks) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = marks;
    }
    
    // Method to display student info
    void displayInfo() {
        System.out.println("Name: " + name);
        System.out.println("Roll No: " + rollNumber);
        System.out.println("Marks: " + marks);
    }
    
    // Method to check if student passed
    boolean hasPassed() {
        return marks >= 40.0f;
    }
}</code></pre>
            
            <p>This class models a real-world student with properties (name, roll number, marks) and behaviors (display info, check pass status).</p>
        `
    },
    {
        id: 4,
        title: "Java Objects",
        content: `
            <h4>What is an Object?</h4>
            <p>An object is an <strong>instance</strong> of a class. While a class is a blueprint, an object is the actual entity created from that blueprint.</p>
            
            <h4>Creating Objects</h4>
            <pre><code class="language-java">// Syntax: ClassName objectName = new ClassName();
Student student1 = new Student("Alice", 101, 85.5f);
Student student2 = new Student("Bob", 102, 72.0f);</code></pre>
            
            <h4>Key Points</h4>
            <ul>
                <li>Each object has its own copy of instance variables</li>
                <li>Objects are stored in <strong>heap memory</strong></li>
                <li>Reference variables (like student1) are stored in <strong>stack memory</strong></li>
                <li>Multiple objects can be created from the same class</li>
            </ul>
        `
    },
    {
        id: 5,
        title: "Class vs Object",
        content: `
            <h4>Understanding the Difference</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
                <tr style="background: var(--bg-secondary);">
                    <th style="padding: 0.75rem; border: 1px solid var(--border);">Class</th>
                    <th style="padding: 0.75rem; border: 1px solid var(--border);">Object</th>
                </tr>
                <tr>
                    <td style="padding: 0.75rem; border: 1px solid var(--border);">Blueprint/Template</td>
                    <td style="padding: 0.75rem; border: 1px solid var(--border);">Instance of a class</td>
                </tr>
                <tr>
                    <td style="padding: 0.75rem; border: 1px solid var(--border);">Logical entity</td>
                    <td style="padding: 0.75rem; border: 1px solid var(--border);">Physical entity</td>
                </tr>
                <tr>
                    <td style="padding: 0.75rem; border: 1px solid var(--border);">Declared once</td>
                    <td style="padding: 0.75rem; border: 1px solid var(--border);">Created many times</td>
                </tr>
                <tr>
                    <td style="padding: 0.75rem; border: 1px solid var(--border);">No memory allocated</td>
                    <td style="padding: 0.75rem; border: 1px solid var(--border);">Memory allocated in heap</td>
                </tr>
            </table>
            
            <h4>Analogy</h4>
            <p><strong>Class = House Blueprint</strong><br>
            <strong>Object = Actual House built from blueprint</strong></p>
            
            <p>You can build many houses (objects) from one blueprint (class), and each house can have different colors, furniture, etc. (different values for instance variables).</p>
        `
    },
    {
        id: 6,
        title: "Properties of Object",
        content: `
            <h4>Three Key Properties</h4>
            
            <h5>1. State (Instance Variables)</h5>
            <p>The data/attributes that an object holds. Each object has its own state.</p>
            <pre><code class="language-java">Student s1 = new Student("Alice", 101, 85.5f);
// State: name="Alice", rollNumber=101, marks=85.5</code></pre>
            
            <h5>2. Behavior (Methods)</h5>
            <p>The actions that an object can perform.</p>
            <pre><code class="language-java">s1.displayInfo();  // Behavior: displaying information
s1.hasPassed();    // Behavior: checking pass status</code></pre>
            
            <h5>3. Identity (Reference)</h5>
            <p>A unique identifier for each object, represented by its memory address.</p>
            <pre><code class="language-java">Student s1 = new Student("Alice", 101, 85.5f);
Student s2 = new Student("Alice", 101, 85.5f);
// s1 and s2 are different objects (different identities)
// even though they have the same state</code></pre>
        `
    },
    {
        id: 7,
        title: "Objects Introduction",
        content: `
            <h4>Deep Dive into Objects</h4>
            
            <h5>Object Creation Process</h5>
            <ol>
                <li><strong>Declaration:</strong> Reference variable is created in stack</li>
                <li><strong>Instantiation:</strong> 'new' keyword allocates memory in heap</li>
                <li><strong>Initialization:</strong> Constructor initializes the object</li>
            </ol>
            
            <pre><code class="language-java">// Step 1: Declaration
Student student;

// Step 2: Instantiation (new keyword)
student = new Student("Alice", 101, 85.5f);

// Or combined:
Student student = new Student("Alice", 101, 85.5f);</code></pre>
            
            <h5>Reference Variables</h5>
            <p>The variable 'student' doesn't contain the object itself, but a <strong>reference</strong> (memory address) to where the object is stored in heap memory.</p>
            
            <pre><code class="language-java">Student s1 = new Student("Alice", 101, 85.5f);
Student s2 = s1;  // s2 now references the same object as s1

s2.name = "Bob";
System.out.println(s1.name);  // Output: Bob
// Both s1 and s2 point to the same object!</code></pre>
        `
    },
    {
        id: 8,
        title: "How to access instance variables?",
        content: `
            <h4>Accessing Instance Variables</h4>
            
            <h5>Using Dot (.) Operator</h5>
            <p>The dot operator is used to access instance variables and methods of an object.</p>
            
            <pre><code class="language-java">class Student {
    String name;
    int rollNumber;
    float marks;
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();
        
        // Accessing instance variables
        s1.name = "Alice";
        s1.rollNumber = 101;
        s1.marks = 85.5f;
        
        // Reading instance variables
        System.out.println("Name: " + s1.name);
        System.out.println("Roll: " + s1.rollNumber);
        System.out.println("Marks: " + s1.marks);
    }
}</code></pre>
            
            <h5>Access Modifiers</h5>
            <ul>
                <li><strong>public:</strong> Accessible from anywhere</li>
                <li><strong>private:</strong> Accessible only within the class (use getters/setters)</li>
                <li><strong>protected:</strong> Accessible within package and subclasses</li>
                <li><strong>default:</strong> Accessible within the same package</li>
            </ul>
        `
    },
    {
        id: 9,
        title: "How to create objects?",
        content: `
            <h4>Different Ways to Create Objects</h4>
            
            <h5>1. Using 'new' Keyword (Most Common)</h5>
            <pre><code class="language-java">Student s1 = new Student("Alice", 101, 85.5f);</code></pre>
            
            <h5>2. Using Class.forName() (Reflection)</h5>
            <pre><code class="language-java">Class cls = Class.forName("Student");
Student s2 = (Student) cls.newInstance();</code></pre>
            
            <h5>3. Using clone() Method</h5>
            <pre><code class="language-java">Student s3 = (Student) s1.clone();</code></pre>
            
            <h5>4. Using Deserialization</h5>
            <pre><code class="language-java">ObjectInputStream in = new ObjectInputStream(new FileInputStream("student.ser"));
Student s4 = (Student) in.readObject();</code></pre>
            
            <h5>Complete Example</h5>
            <pre><code class="language-java">class Student {
    String name;
    int rollNumber;
    
    Student() {
        name = "Unknown";
        rollNumber = 0;
    }
    
    Student(String n, int r) {
        name = n;
        rollNumber = r;
    }
}

public class Main {
    public static void main(String[] args) {
        // Method 1: Default constructor
        Student s1 = new Student();
        
        // Method 2: Parameterized constructor
        Student s2 = new Student("Alice", 101);
        
        // Method 3: Setting values after creation
        Student s3 = new Student();
        s3.name = "Bob";
        s3.rollNumber = 102;
    }
}</code></pre>
        `
    },
    {
        id: 10,
        title: "Dynamic Memory Allocation",
        content: `
            <h4>How Java Manages Memory</h4>
            
            <h5>Stack vs Heap</h5>
            <ul>
                <li><strong>Stack Memory:</strong> Stores local variables and method calls (LIFO)</li>
                <li><strong>Heap Memory:</strong> Stores objects created with 'new' keyword</li>
            </ul>
            
            <h5>Memory Allocation Example</h5>
            <pre><code class="language-java">public class Main {
    public static void main(String[] args) {
        int x = 10;  // Stored in Stack
        
        Student s1 = new Student("Alice", 101, 85.5f);
        // s1 (reference) -> Stack
        // Student object -> Heap
        
        Student s2 = new Student("Bob", 102, 72.0f);
        // s2 (reference) -> Stack
        // Another Student object -> Heap
    }
}</code></pre>
            
            <h5>Dynamic Allocation Benefits</h5>
            <ul>
                <li>Memory is allocated at runtime (not compile time)</li>
                <li>Size can be determined during execution</li>
                <li>Objects persist until garbage collected</li>
                <li>Flexible memory management</li>
            </ul>
            
            <h5>Memory Diagram</h5>
            <pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px;">
STACK                    HEAP
┌─────────┐             ┌──────────────────┐
│ x = 10  │             │ Student Object 1 │
├─────────┤             │ name: "Alice"    │
│ s1 ──────────────────→│ roll: 101        │
├─────────┤             │ marks: 85.5      │
│ s2 ──────────────┐    └──────────────────┘
└─────────┘       │    ┌──────────────────┐
                  └───→│ Student Object 2 │
                       │ name: "Bob"      │
                       │ roll: 102        │
                       │ marks: 72.0      │
                       └──────────────────┘
            </pre>
        `
    },
    {
        id: 11,
        title: "How to manipulate objects?",
        content: `
            <h4>Object Manipulation Techniques</h4>
            
            <h5>1. Modifying Instance Variables</h5>
            <pre><code class="language-java">Student s1 = new Student("Alice", 101, 85.5f);

// Direct modification (if variables are public)
s1.name = "Alice Smith";
s1.marks = 90.0f;

// Using setter methods (recommended)
s1.setName("Alice Smith");
s1.setMarks(90.0f);</code></pre>
            
            <h5>2. Calling Methods</h5>
            <pre><code class="language-java">s1.displayInfo();
boolean passed = s1.hasPassed();
s1.updateMarks(95.0f);</code></pre>
            
            <h5>3. Passing Objects to Methods</h5>
            <pre><code class="language-java">class Student {
    String name;
    int rollNumber;
    
    void copyFrom(Student other) {
        this.name = other.name;
        this.rollNumber = other.rollNumber;
    }
}

public class Main {
    static void updateStudent(Student s) {
        s.name = "Updated Name";
    }
    
    public static void main(String[] args) {
        Student s1 = new Student();
        s1.name = "Alice";
        
        updateStudent(s1);
        System.out.println(s1.name);  // Output: Updated Name
        // Objects are passed by reference!
    }
}</code></pre>
            
            <h5>4. Returning Objects from Methods</h5>
            <pre><code class="language-java">class Student {
    String name;
    int rollNumber;
    
    Student getCopy() {
        Student copy = new Student();
        copy.name = this.name;
        copy.rollNumber = this.rollNumber;
        return copy;
    }
}</code></pre>
        `
    },
    {
        id: 12,
        title: "Java Constructors",
        content: `
            <h4>What is a Constructor?</h4>
            <p>A constructor is a <strong>special method</strong> that is automatically called when an object is created. It initializes the object's state.</p>
            
            <h4>Constructor Characteristics</h4>
            <ul>
                <li>Same name as the class</li>
                <li>No return type (not even void)</li>
                <li>Called automatically when object is created</li>
                <li>Used to initialize instance variables</li>
            </ul>
            
            <h4>Constructor Syntax</h4>
            <pre><code class="language-java">class Student {
    String name;
    int rollNumber;
    
    // Constructor
    Student(String n, int r) {
        name = n;
        rollNumber = r;
        System.out.println("Student object created!");
    }
}

// Usage
Student s1 = new Student("Alice", 101);
// Output: Student object created!</code></pre>
            
            <h4>Why Use Constructors?</h4>
            <ul>
                <li>Ensure objects are properly initialized</li>
                <li>Set default values for instance variables</li>
                <li>Perform setup operations (open files, establish connections, etc.)</li>
                <li>Enforce mandatory parameters</li>
            </ul>
        `
    },
    {
        id: 13,
        title: "By Default Constructor",
        content: `
            <h4>Default Constructor</h4>
            <p>If you don't define any constructor, Java automatically provides a <strong>default constructor</strong> with no parameters.</p>
            
            <h5>Example Without Explicit Constructor</h5>
            <pre><code class="language-java">class Student {
    String name;
    int rollNumber;
    
    // No constructor defined
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();  // Default constructor called
        // Instance variables initialized to default values:
        // name = null
        // rollNumber = 0
    }
}</code></pre>
            
            <h5>Default Values</h5>
            <ul>
                <li><strong>Numeric types (int, float, etc.):</strong> 0</li>
                <li><strong>boolean:</strong> false</li>
                <li><strong>Object references:</strong> null</li>
            </ul>
            
            <h5>Important Note</h5>
            <p>⚠️ If you define <strong>any</strong> constructor (even parameterized), Java will NOT provide the default constructor!</p>
            
            <pre><code class="language-java">class Student {
    String name;
    int rollNumber;
    
    Student(String n, int r) {
        name = n;
        rollNumber = r;
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();  // ❌ ERROR!
        // Default constructor not available
        
        Student s2 = new Student("Alice", 101);  // ✅ OK
    }
}</code></pre>
        `
    },
    {
        id: 14,
        title: "Creating Constructors",
        content: `
            <h4>Types of Constructors</h4>
            
            <h5>1. No-Argument Constructor</h5>
            <pre><code class="language-java">class Student {
    String name;
    int rollNumber;
    
    // No-argument constructor
    Student() {
        name = "Unknown";
        rollNumber = 0;
        System.out.println("No-arg constructor called");
    }
}</code></pre>
            
            <h5>2. Parameterized Constructor</h5>
            <pre><code class="language-java">class Student {
    String name;
    int rollNumber;
    float marks;
    
    // Parameterized constructor
    Student(String n, int r, float m) {
        name = n;
        rollNumber = r;
        marks = m;
    }
}

// Usage
Student s1 = new Student("Alice", 101, 85.5f);</code></pre>
            
            <h5>3. Copy Constructor</h5>
            <pre><code class="language-java">class Student {
    String name;
    int rollNumber;
    
    // Regular constructor
    Student(String n, int r) {
        name = n;
        rollNumber = r;
    }
    
    // Copy constructor
    Student(Student other) {
        this.name = other.name;
        this.rollNumber = other.rollNumber;
    }
}

// Usage
Student s1 = new Student("Alice", 101);
Student s2 = new Student(s1);  // Creates a copy of s1</code></pre>
            
            <h5>Complete Example</h5>
            <pre><code class="language-java">class Student {
    String name;
    int rollNumber;
    float marks;
    
    // No-arg constructor
    Student() {
        this("Unknown", 0, 0.0f);
    }
    
    // Parameterized constructor
    Student(String name, int rollNumber, float marks) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = marks;
    }
    
    void display() {
        System.out.println("Name: " + name);
        System.out.println("Roll: " + rollNumber);
        System.out.println("Marks: " + marks);
    }
}</code></pre>
        `
    },
    {
        id: 15,
        title: '"this" keyword',
        content: `
            <h4>Understanding "this" Keyword</h4>
            <p>The <strong>this</strong> keyword is a reference to the <strong>current object</strong> - the object whose method or constructor is being called.</p>
            
            <h4>Uses of "this"</h4>
            
            <h5>1. Differentiate Instance Variables from Parameters</h5>
            <pre><code class="language-java">class Student {
    String name;
    int rollNumber;
    
    Student(String name, int rollNumber) {
        this.name = name;          // this.name = instance variable
        this.rollNumber = rollNumber;  // name = parameter
    }
}</code></pre>
            
            <h5>2. Call Another Constructor (Constructor Chaining)</h5>
            <pre><code class="language-java">class Student {
    String name;
    int rollNumber;
    float marks;
    
    Student() {
        this("Unknown", 0, 0.0f);  // Calls parameterized constructor
    }
    
    Student(String name, int rollNumber, float marks) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = marks;
    }
}</code></pre>
            
            <h5>3. Pass Current Object as Parameter</h5>
            <pre><code class="language-java">class Student {
    String name;
    
    void display() {
        printStudent(this);  // Passing current object
    }
    
    void printStudent(Student s) {
        System.out.println("Name: " + s.name);
    }
}</code></pre>
            
            <h5>4. Return Current Object</h5>
            <pre><code class="language-java">class Student {
    String name;
    int rollNumber;
    
    Student setName(String name) {
        this.name = name;
        return this;  // Method chaining
    }
    
    Student setRollNumber(int rollNumber) {
        this.rollNumber = rollNumber;
        return this;
    }
}

// Usage (Method Chaining)
Student s1 = new Student()
    .setName("Alice")
    .setRollNumber(101);</code></pre>
            
            <h5>Common Mistake</h5>
            <pre><code class="language-java">class Student {
    String name;
    
    // ❌ Without "this" - doesn't work as expected
    Student(String name) {
        name = name;  // Just assigns parameter to itself!
    }
    
    // ✅ With "this" - works correctly
    Student(String name) {
        this.name = name;  // Assigns to instance variable
    }
}</code></pre>
        `
    },
    {
        id: 16,
        title: "Constructor Overloading",
        content: `
            <h4>What is Constructor Overloading?</h4>
            <p>Having <strong>multiple constructors</strong> in the same class with <strong>different parameter lists</strong>. This provides flexibility in object creation.</p>
            
            <h4>Rules for Overloading</h4>
            <ul>
                <li>Different number of parameters, OR</li>
                <li>Different types of parameters, OR</li>
                <li>Different order of parameters</li>
            </ul>
            
            <h4>Complete Example</h4>
            <pre><code class="language-java">class Student {
    String name;
    int rollNumber;
    float marks;
    String email;
    
    // Constructor 1: No parameters
    Student() {
        this.name = "Unknown";
        this.rollNumber = 0;
        this.marks = 0.0f;
        this.email = "not@provided.com";
    }
    
    // Constructor 2: Name and roll number only
    Student(String name, int rollNumber) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = 0.0f;
        this.email = "not@provided.com";
    }
    
    // Constructor 3: All parameters
    Student(String name, int rollNumber, float marks, String email) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = marks;
        this.email = email;
    }
    
    // Constructor 4: Copy constructor
    Student(Student other) {
        this.name = other.name;
        this.rollNumber = other.rollNumber;
        this.marks = other.marks;
        this.email = other.email;
    }
    
    void display() {
        System.out.println("Name: " + name);
        System.out.println("Roll: " + rollNumber);
        System.out.println("Marks: " + marks);
        System.out.println("Email: " + email);
    }
}

public class Main {
    public static void main(String[] args) {
        // Using different constructors
        Student s1 = new Student();
        Student s2 = new Student("Alice", 101);
        Student s3 = new Student("Bob", 102, 85.5f, "bob@email.com");
        Student s4 = new Student(s3);  // Copy of s3
        
        s1.display();
        s2.display();
        s3.display();
        s4.display();
    }
}</code></pre>
            
            <h4>Benefits</h4>
            <ul>
                <li>Flexibility in object creation</li>
                <li>Default values for optional parameters</li>
                <li>Better code readability</li>
                <li>Supports different use cases</li>
            </ul>
        `
    },
    {
        id: 17,
        title: "Calling a constructor from another constructor",
        content: `
            <h4>Constructor Chaining</h4>
            <p>Calling one constructor from another constructor in the same class using <strong>this()</strong>.</p>
            
            <h4>Why Use Constructor Chaining?</h4>
            <ul>
                <li>Avoid code duplication</li>
                <li>Centralize initialization logic</li>
                <li>Maintain consistency</li>
            </ul>
            
            <h4>Example</h4>
            <pre><code class="language-java">class Student {
    String name;
    int rollNumber;
    float marks;
    String email;
    
    // Main constructor with all parameters
    Student(String name, int rollNumber, float marks, String email) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.marks = marks;
        this.email = email;
        System.out.println("All-parameter constructor called");
    }
    
    // Constructor with 3 parameters - chains to main constructor
    Student(String name, int rollNumber, float marks) {
        this(name, rollNumber, marks, "not@provided.com");
        System.out.println("3-parameter constructor called");
    }
    
    // Constructor with 2 parameters - chains to 3-parameter constructor
    Student(String name, int rollNumber) {
        this(name, rollNumber, 0.0f);
        System.out.println("2-parameter constructor called");
    }
    
    // No-arg constructor - chains to 2-parameter constructor
    Student() {
        this("Unknown", 0);
        System.out.println("No-arg constructor called");
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student();
        /* Output:
           All-parameter constructor called
           3-parameter constructor called
           2-parameter constructor called
           No-arg constructor called
        */
    }
}</code></pre>
            
            <h4>Important Rules</h4>
            <ul>
                <li><strong>this()</strong> must be the <strong>first statement</strong> in constructor</li>
                <li>Cannot call two constructors using this()</li>
                <li>Cannot create circular chains (A calls B, B calls A)</li>
            </ul>
            
            <h5>❌ Common Mistakes</h5>
            <pre><code class="language-java">Student() {
    System.out.println("Hello");
    this("Unknown", 0);  // ❌ ERROR: this() must be first
}

Student() {
    this("Alice", 101);
    this("Bob", 102);  // ❌ ERROR: Can't call two constructors
}</code></pre>
        `
    },
    {
        id: 18,
        title: 'Why we don\'t use "new" keyword for creating primitive data types?',
        content: `
            <h4>Primitives vs Objects</h4>
            
            <h5>Primitive Types (8 in Java)</h5>
            <p>byte, short, int, long, float, double, char, boolean</p>
            
            <h4>Why No "new" for Primitives?</h4>
            
            <h5>1. Performance</h5>
            <p>Primitives are stored directly in <strong>stack memory</strong>, which is faster to access than heap memory.</p>
            
            <pre><code class="language-java">// Primitive - stored in stack (fast)
int x = 10;

// Object - stored in heap (slower)
Integer y = new Integer(10);</code></pre>
            
            <h5>2. Memory Efficiency</h5>
            <p>Primitives use less memory. An int uses 4 bytes, while an Integer object uses ~16 bytes (object overhead).</p>
            
            <h5>3. Simplicity</h5>
            <p>Primitives are simple values, not objects. They don't need constructors or methods.</p>
            
            <h4>Comparison</h4>
            <pre><code class="language-java">// Primitives
int a = 10;
int b = 20;
int sum = a + b;  // Direct arithmetic

// Wrapper Objects
Integer x = new Integer(10);
Integer y = new Integer(20);
Integer sum = x + y;  // Auto-unboxing happens</code></pre>
            
            <h4>Memory Layout</h4>
            <pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px;">
STACK                    HEAP
┌─────────┐             
│ int x=10│             (Nothing for primitives)
├─────────┤             
│ int y=20│             
└─────────┘             

STACK                    HEAP
┌─────────┐             ┌──────────────┐
│ ref ─────────────────→│ Integer(10)  │
└─────────┘             └──────────────┘
            </pre>
            
            <h4>When to Use Each?</h4>
            <ul>
                <li><strong>Primitives:</strong> For simple values, calculations, performance-critical code</li>
                <li><strong>Wrapper Objects:</strong> When you need null values, collections (ArrayList<Integer>), or object methods</li>
            </ul>
        `
    },
    {
        id: 19,
        title: 'Memory Allocation of "new" keyword',
        content: `
            <h4>How "new" Works</h4>
            
            <h5>Step-by-Step Process</h5>
            <ol>
                <li><strong>Memory Allocation:</strong> JVM allocates memory in heap for the object</li>
                <li><strong>Default Initialization:</strong> Instance variables set to default values</li>
                <li><strong>Constructor Call:</strong> Constructor initializes the object</li>
                <li><strong>Reference Return:</strong> Memory address returned to reference variable</li>
            </ol>
            
            <h4>Detailed Example</h4>
            <pre><code class="language-java">class Student {
    String name;     // Default: null
    int rollNumber;  // Default: 0
    
    Student(String n, int r) {
        this.name = n;
        this.rollNumber = r;
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("Alice", 101);
        
        /* What happens:
         * 1. JVM allocates memory in heap (e.g., address 0x1234)
         * 2. name = null, rollNumber = 0 (defaults)
         * 3. Constructor runs: name = "Alice", rollNumber = 101
         * 4. Address 0x1234 stored in s1
         */
    }
}</code></pre>
            
            <h4>Memory Diagram</h4>
            <pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px;">
Before "new":
STACK                    HEAP
┌─────────┐             
│ s1=null │             (Empty)
└─────────┘             

After "new Student(...)":
STACK                    HEAP (Address: 0x1234)
┌──────────┐            ┌────────────────────┐
│s1=0x1234─────────────→│ Student Object     │
└──────────┘            │ name: "Alice"      │
                        │ rollNumber: 101    │
                        └────────────────────┘
            </pre>
            
            <h4>Multiple Objects</h4>
            <pre><code class="language-java">Student s1 = new Student("Alice", 101);
Student s2 = new Student("Bob", 102);
Student s3 = s1;  // s3 points to same object as s1

s3.name = "Alice Smith";
System.out.println(s1.name);  // Output: Alice Smith</code></pre>
            
            <pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px;">
STACK                    HEAP
┌──────────┐            ┌────────────────────┐
│s1=0x1234─────────────→│ Student Object 1   │
├──────────┤            │ name: "Alice Smith"│
│s2=0x5678─────────┐   │ rollNumber: 101    │
├──────────┤       │   └────────────────────┘
│s3=0x1234─────────┼───→(Same as s1)
└──────────┘       │   ┌────────────────────┐
                   └──→│ Student Object 2   │
                       │ name: "Bob"        │
                       │ rollNumber: 102    │
                       └────────────────────┘
            </pre>
            
            <h4>Key Points</h4>
            <ul>
                <li>Each "new" creates a separate object in heap</li>
                <li>Reference variables store memory addresses, not objects</li>
                <li>Multiple references can point to the same object</li>
                <li>Objects remain in heap until garbage collected</li>
            </ul>
        `
    },
    {
        id: 20,
        title: "Wrapper Classes",
        content: `
            <h4>What are Wrapper Classes?</h4>
            <p>Wrapper classes provide a way to use <strong>primitive data types as objects</strong>.</p>
            
            <h4>Primitive to Wrapper Mapping</h4>
            <table style="width: 100%; border-collapse: collapse; margin: 1rem 0;">
                <tr style="background: var(--bg-secondary);">
                    <th style="padding: 0.75rem; border: 1px solid var(--border);">Primitive</th>
                    <th style="padding: 0.75rem; border: 1px solid var(--border);">Wrapper Class</th>
                </tr>
                <tr><td style="padding: 0.75rem; border: 1px solid var(--border);">byte</td><td style="padding: 0.75rem; border: 1px solid var(--border);">Byte</td></tr>
                <tr><td style="padding: 0.75rem; border: 1px solid var(--border);">short</td><td style="padding: 0.75rem; border: 1px solid var(--border);">Short</td></tr>
                <tr><td style="padding: 0.75rem; border: 1px solid var(--border);">int</td><td style="padding: 0.75rem; border: 1px solid var(--border);">Integer</td></tr>
                <tr><td style="padding: 0.75rem; border: 1px solid var(--border);">long</td><td style="padding: 0.75rem; border: 1px solid var(--border);">Long</td></tr>
                <tr><td style="padding: 0.75rem; border: 1px solid var(--border);">float</td><td style="padding: 0.75rem; border: 1px solid var(--border);">Float</td></tr>
                <tr><td style="padding: 0.75rem; border: 1px solid var(--border);">double</td><td style="padding: 0.75rem; border: 1px solid var(--border);">Double</td></tr>
                <tr><td style="padding: 0.75rem; border: 1px solid var(--border);">char</td><td style="padding: 0.75rem; border: 1px solid var(--border);">Character</td></tr>
                <tr><td style="padding: 0.75rem; border: 1px solid var(--border);">boolean</td><td style="padding: 0.75rem; border: 1px solid var(--border);">Boolean</td></tr>
            </table>
            
            <h4>Why Use Wrapper Classes?</h4>
            <ul>
                <li>To use primitives in collections (ArrayList, HashMap, etc.)</li>
                <li>To use null values</li>
                <li>To use utility methods (parseInt, toString, etc.)</li>
                <li>For serialization</li>
            </ul>
            
            <h4>Autoboxing and Unboxing</h4>
            <pre><code class="language-java">// Autoboxing: Primitive → Wrapper (automatic)
int x = 10;
Integer obj = x;  // Autoboxing

// Unboxing: Wrapper → Primitive (automatic)
Integer obj2 = new Integer(20);
int y = obj2;  // Unboxing

// Before Java 5 (manual)
Integer obj3 = Integer.valueOf(30);  // Boxing
int z = obj3.intValue();  // Unboxing</code></pre>
            
            <h4>Common Methods</h4>
            <pre><code class="language-java">// String to primitive
int num = Integer.parseInt("123");
double d = Double.parseDouble("45.67");

// Primitive to String
String str1 = Integer.toString(100);
String str2 = String.valueOf(200);

// Comparison
Integer a = 100;
Integer b = 100;
System.out.println(a == b);        // true (cached)
System.out.println(a.equals(b));   // true

Integer c = 200;
Integer d = 200;
System.out.println(c == d);        // false (not cached)
System.out.println(c.equals(d));   // true</code></pre>
            
            <h4>Practical Example</h4>
            <pre><code class="language-java">import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        // ❌ Can't use primitives in collections
        // ArrayList<int> list = new ArrayList<>();
        
        // ✅ Use wrapper classes
        ArrayList<Integer> list = new ArrayList<>();
        
        list.add(10);     // Autoboxing
        list.add(20);
        list.add(30);
        
        int first = list.get(0);  // Unboxing
        System.out.println("First: " + first);
        
        // Null values possible with wrappers
        Integer nullValue = null;
        System.out.println(nullValue);  // null
        
        // int primitiveNull = null;  // ❌ ERROR
    }
}</code></pre>
        `
    },
    {
        id: 21,
        title: '"final" keyword',
        content: `
            <h4>Understanding "final" Keyword</h4>
            <p>The <strong>final</strong> keyword is used to create constants and prevent modification.</p>
            
            <h4>1. Final Variables (Constants)</h4>
            <pre><code class="language-java">class Student {
    final int MAX_MARKS = 100;  // Constant
    final String SCHOOL_NAME;   // Blank final
    
    Student() {
        SCHOOL_NAME = "ABC School";  // Must initialize in constructor
    }
    
    void updateMarks() {
        // MAX_MARKS = 200;  // ❌ ERROR: Cannot modify final variable
    }
}

public class Main {
    public static void main(String[] args) {
        final int x = 10;
        // x = 20;  // ❌ ERROR: Cannot reassign final variable
        
        final Student s1 = new Student();
        // s1 = new Student();  // ❌ ERROR: Cannot reassign reference
        
        s1.MAX_MARKS = 200;  // ❌ ERROR: Cannot modify final field
    }
}</code></pre>
            
            <h4>2. Final Methods (Cannot be Overridden)</h4>
            <pre><code class="language-java">class Parent {
    final void display() {
        System.out.println("Parent display");
    }
}

class Child extends Parent {
    // ❌ ERROR: Cannot override final method
    // void display() {
    //     System.out.println("Child display");
    // }
}</code></pre>
            
            <h4>3. Final Classes (Cannot be Extended)</h4>
            <pre><code class="language-java">final class MathUtils {
    static int add(int a, int b) {
        return a + b;
    }
}

// ❌ ERROR: Cannot extend final class
// class AdvancedMath extends MathUtils {
// }

// Real example: String class is final
// class MyString extends String { }  // ❌ ERROR</code></pre>
            
            <h4>Final with Objects</h4>
            <pre><code class="language-java">class Student {
    String name;
    int rollNumber;
    
    Student(String name, int rollNumber) {
        this.name = name;
        this.rollNumber = rollNumber;
    }
}

public class Main {
    public static void main(String[] args) {
        final Student s1 = new Student("Alice", 101);
        
        // ✅ Can modify object's internal state
        s1.name = "Alice Smith";
        s1.rollNumber = 102;
        
        // ❌ Cannot reassign reference
        // s1 = new Student("Bob", 103);
    }
}</code></pre>
            
            <h4>Best Practices</h4>
            <ul>
                <li>Use UPPER_CASE for final constants</li>
                <li>Declare constants as <code>static final</code></li>
                <li>Use final for immutable values</li>
                <li>Use final parameters to prevent accidental modification</li>
            </ul>
            
            <pre><code class="language-java">class Constants {
    static final double PI = 3.14159;
    static final int MAX_STUDENTS = 100;
    static final String APP_NAME = "Student Management";
}

class Student {
    void printInfo(final String name) {
        // name = "Modified";  // ❌ ERROR: final parameter
        System.out.println("Name: " + name);
    }
}</code></pre>
        `
    },
    {
        id: 22,
        title: "Garbage Collection",
        content: `
            <h4>What is Garbage Collection?</h4>
            <p>Garbage Collection (GC) is the <strong>automatic memory management</strong> process in Java that reclaims memory occupied by objects that are no longer in use.</p>
            
            <h4>How Objects Become Eligible for GC</h4>
            
            <h5>1. Nullifying Reference</h5>
            <pre><code class="language-java">Student s1 = new Student("Alice", 101);
s1 = null;  // Object becomes eligible for GC</code></pre>
            
            <h5>2. Reassigning Reference</h5>
            <pre><code class="language-java">Student s1 = new Student("Alice", 101);
s1 = new Student("Bob", 102);  // First object eligible for GC</code></pre>
            
            <h5>3. Object Created Inside Method</h5>
            <pre><code class="language-java">void createStudent() {
    Student s1 = new Student("Alice", 101);
    // s1 becomes eligible for GC when method ends
}</code></pre>
            
            <h5>4. Island of Isolation</h5>
            <pre><code class="language-java">class Node {
    Node next;
}

Node n1 = new Node();
Node n2 = new Node();
n1.next = n2;
n2.next = n1;

n1 = null;
n2 = null;
// Both objects eligible for GC (circular reference but no external reference)</code></pre>
            
            <h4>Requesting Garbage Collection</h4>
            <pre><code class="language-java">// Method 1: Using System class
System.gc();

// Method 2: Using Runtime class
Runtime.getRuntime().gc();

// Note: These are just requests, JVM may or may not run GC immediately</code></pre>
            
            <h4>finalize() Method</h4>
            <p>Called by GC before destroying an object (deprecated in Java 9+)</p>
            <pre><code class="language-java">class Student {
    String name;
    
    Student(String name) {
        this.name = name;
    }
    
    @Override
    protected void finalize() throws Throwable {
        System.out.println("Object " + name + " is being garbage collected");
    }
}

public class Main {
    public static void main(String[] args) {
        Student s1 = new Student("Alice");
        Student s2 = new Student("Bob");
        
        s1 = null;
        s2 = null;
        
        System.gc();  // Request GC
        
        // Output (may vary):
        // Object Alice is being garbage collected
        // Object Bob is being garbage collected
    }
}</code></pre>
            
            <h4>Memory Diagram</h4>
            <pre style="background: var(--bg-secondary); padding: 1rem; border-radius: 8px;">
Before GC:
HEAP
┌────────────────┐
│ Student("Alice")│ ← s1 = null (no reference)
├────────────────┤
│ Student("Bob")  │ ← s2 points here
└────────────────┘

After GC:
HEAP
┌────────────────┐
│ (freed)        │
├────────────────┤
│ Student("Bob")  │ ← s2 points here
└────────────────┘
            </pre>
            
            <h4>Important Points</h4>
            <ul>
                <li>GC runs automatically - you can't force it</li>
                <li>GC only removes objects from heap, not primitives from stack</li>
                <li>Objects with no references are eligible for GC</li>
                <li>finalize() is called only once per object</li>
                <li>GC improves performance by preventing memory leaks</li>
            </ul>
            
            <h4>Best Practices</h4>
            <ul>
                <li>Don't rely on finalize() for cleanup (use try-with-resources)</li>
                <li>Nullify references when done with large objects</li>
                <li>Avoid creating unnecessary objects in loops</li>
                <li>Use object pools for frequently created/destroyed objects</li>
            </ul>
        `
    }
];

