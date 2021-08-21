**<center>(Đề đề xuất DHBB 2017 của THPT CHUYÊN VĨNH PHÚC)</center>**

Harry và Hermione thắng cuộc trong một trò chơi truyền hình và bây giờ là giai đoạn trao thưởng. Quy tắc trao thưởng là như sau: có $n$ phần thưởng xếp thành một hàng dài, đánh số từ $1$ đến $n$. Tùy thuộc vào số điểm đã đạt được của cặp chơi, người dẫn chương trình sẽ nói một số $k\ (1 ≤ k ≤ \frac{n}{3})$. Một người chơi sẽ chọn cho mình $k$ phần thưởng xếp liên tiếp nhau, người thứ hai cũng sẽ chọn cho mình $k$ phần thưởng xếp liên tiếp nhau trong số còn lại. Hermione là nữ nên được ưu tiên chọn trước.

Trò chơi đã kết thúc. Bây giờ không cần phải đồng tâm hiệp lực. Hermione vẫn còn rất giận Harry về một câu nói vô tâm mà chắc bây giờ Harry cũng không nhớ là mình nói cái gì và khi nào. Hermione hiểu rất rõ giá trị mỗi phần thưởng đối với Harry, cụ thể là phần thưởng thứ $i$ sẽ có giá trị $a_i$ và quyết định cách chọn của mình sao cho tổng giá trị phần thưởng mà Harry có thể đạt được càng nhỏ càng tốt. Về tổng giá trị phần thưởng của mình, Hermione không mảy may quan tâm!

Hãy xác định $x$ – tổng nhỏ nhất giá trị phần thưởng mà Hermione có thể chọn để Harry không có cách chọn phần thưởng với tổng giá trị lớn hơn $x$.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên dương $n$ và $k$ được ghi cách nhau một dấu cách.
- Dòng tiếp theo ghi $n$ số nguyên dương $a_1, …, a_n$, hai số liên tiếp được ghi cách nhau một dấu cách.

## Dữ liệu ra:
- Số $x$ tìm được.

## Ví dụ:
#### Dữ liệu vào:
```
10 2
1 2 4 5 2 4 2 2 1 6
```

#### Dữ liệu ra:
```
7
```

#### Giải thích:
- Hermione chọn phần thưởng số $3$ và $4$. Sau khi Hermione chọn thì Harry có $6$ cách chọn hai phần thưởng liên tiếp là: $1, 2; 2, 4; 4, 2; 2, 2; 2, 1; 1, 6$. Giá trị lớn nhất có thể chọn là $7$.

## Giới hạn:
- $1 ≤ n ≤ 10^5; 1 ≤ k ≤ \frac{n}{3}; 1 ≤ a_i ≤ 10^9$.