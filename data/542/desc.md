Disjoint-set hiểu một cách đơn giản là một cách lưu trữ các tập hợp phần tử của một tập lớn cho trước với phép toán thường được quan tâm tới trong disjoint-set là:
- $MakeSet(i)$: tạo ra một tập chỉ có $i$;
- $FindSet(i)$: tìm tập hợp chứa nút $i$;
- $Union(i, j)$: ghép hai tập hợp chứa $i$ và $j$ với nhau.

Xét bài toán:
Cho một đồ thị gồm $N$ đỉnh được đánh số từ $1$ đến $N$, giữa hai đỉnh bất kỳ đều có thể nối hoặc không nối với nhau. Ở trạng thái ban đầu tất cả các đỉnh đều không có cạnh nối. Bạn được cho một số yêu cầu, trong đó mỗi yêu cầu có một trong hai dạng:
- $X\ Y\ 1$: có ý nghĩa là bạn cần nối hai đỉnh $X$ và $Y$ bằng một cạnh.
- $X\ Y\ 2$: có ý nghĩa là bạn cần cho biết với trạng thái như hiện tại thì hai đỉnh $X$ và $Y$ có thuộc cùng một thành phần liên thông hay không?

## Dữ liệu vào:
- Dòng đầu tiên ghi một số nguyên dương $P$ là số yêu cầu;
- Trong $P$ dòng tiếp theo, mỗi dòng ghi ba số nguyên dương $X, Y, Z$ với ý nghĩa có yêu cầu loại $Z$ với hai đỉnh $X$ và $Y$.

## Dữ liệu ra:
- Với mỗi yêu cầu dạng $X\ Y\ 2$ (với $Z = 2$) bạn cần ghi ra số $0$ hoặc $1$ trên một dòng tùy thuộc hai đỉnh $X$ và $Y$ không thuộc hoặc thuộc cùng một thành phần liên thông.

## Ví dụ:
#### Dữ liệu vào:
```
9
1 2 2
1 2 1
3 7 2
2 3 1
1 3 2
2 4 2
1 4 1
3 4 2
1 7 2
```

#### Dữ liệu ra:
```
0
0
1
0
1
0
```

## Giới hạn:
- $1 ≤ n ≤ 10000; 0 ≤ P ≤ 50000$.