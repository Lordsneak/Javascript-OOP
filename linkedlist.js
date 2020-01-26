            class Node {
                constructor(data, next, prev) {
                    this.data = data;
                    this.next = next || null;
                    this.prev = prev || null;
                }
            }
            class LinkedList {
                constructor() {
                    this.head = null;
                    this.size = 0;
                }
                //insert first node
                insertFirst(data) {
                    if (!this.head) {
                        this.head = new Node(data);
                    } else {
                        let temp = this.head;
                        this.head = new Node(data, temp);
                        temp.prev = this.head;
                    }
                    this.size++;
                }

                //insert last node
                insertLast(data) {
                    let node = new Node(data);
                    let current;
                    // If empty make head
                    if (!this.head) {
                        this.head = node;
                    } else {
                        current = this.head;
                        while (current.next) {
                            current = current.next;
                        }
                        current.next = node;
                    }
                    this.size++;
                }
                // Clear list
                clearList() {
                    this.head = null;
                    this.size = 0;
                }
                // print List data
                printListData() {
                    let rows = "<tr>";
                    let current = this.head;
                    while (current) {
                        rows += "<td>" + current.data + "</td>";
                        current = current.next;
                    }
                    rows += "</tr>";
                    return rows;
                }
            }

            let ll = new LinkedList();

            function insertFirst() {
                ll.insertFirst(document.getElementById("data").value);
                document.getElementById("myTable").innerHTML = ll.printListData();
            }

            function insertLast() {
                ll.insertLast(document.getElementById("data").value);
                document.getElementById("myTable").innerHTML = ll.printListData();
            }