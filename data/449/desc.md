Trên trục tọa độ, tại các điểm có tọa độ nguyên trong đoạn $[1;N]$ có ghi các số $a_i$. Ban đầu người chơi đứng ở điểm có tọa độ là $0$ với tổng điểm là $0$. Mỗi bước di chuyển người chơi có thể di chuyển sang phải tối thiểu là $1$ bước, tối đa là $K$ bước. Khi đến điểm nào thì số nguyên ở điểm đó sẽ được cộng vào tổng điểm của người chơi. Người chơi có thể dừng lại bất cứ khi nào họ muốn. Hãy tìm cách chơi để đạt tổng điểm lớn nhất.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương $N$ và $K$ cách nhau bởi một khoảng trắng;
- Dòng thứ hai ghi $N$ số $a_1, a_2, \ldots. a_N$, mỗi số cách nhau bởi một khoảng trắng.

## Dữ liệu ra:
- Ghi ra trên một dòng danh sách tọa độ các ô người chơi sẽ đi qua theo thứ tự tăng dần để đạt được tổng điểm lớn nhất, nếu có nhiều cách, chỉ cần ghi ra một cách bất kỳ.

## Ví dụ:
#### Dữ liệu vào:
```
5 2
-2 3 -6 -4 5
```

## Dữ liệu ra:
```
0 2 4 5
```

#### Giải thích:
- Người chơi di chuyển như sau: $0→2→4→5$, tổng điểm là $3 + (-4) + 5 = 4$

## Giới hạn:
- $2 ≤ N ≤ 10000; 1 ≤ k ≤ 10;  -1000 ≤ a_i ≤ 1000$