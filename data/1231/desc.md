**<center>Nguồn: Ôn HN tháng 11/2016, Thầy Nguyễn Đức Nghĩa, Ngày 1</center>**

Bộ bài domino gồm những thanh hình chữ nhật, mỗi thanh được chia ra thành hai hình vuông bằng nhau. Trên mỗi nửa quân bài người ta ghi các số từ $0$ đến $M$. Một bộ bài domino đủ như vậy sẽ có tất cả các cặp hai số nguyên khác nhau. Ví dụ, nếu $M=3$, bộ bài đủ sẽ bao gồm $10$ quân bài $(0, 0), (0, 1), (0, 2), (0, 3), (1, 1), (1, 2), (1, 3), (2, 2), (2, 3), (3, 3)$.

Ta có thể nối các quân bài domino lại thành một dãy bằng cách gộp theo cạnh ngắn của hai quân bài với điều kiện hai ô vuông có cạnh tiếp xúc ở hai quân bài có giá trị số ghi trên chúng là như nhau.

**Yêu cầu:** Cho tập gồm một số quân bài của bộ bài domino $M$. Cần tìm cách gộp các quân bài đã cho thành một số ít nhất dãy có thể được sao cho mỗi quân bài phải thuộc vào đúng một trong các dãy xây dựng.

## Dữ liệu vào:
- Dòng đầu tiên ghi số nguyên dương $M\ (M ≤ 100)$ - giá trị số lớn nhất trên một nửa của quân bài domino;
- Dòng thứ hai ghi số nguyên $N$ là số lượng quân bài bị loại khỏi bộ bài;
- Dòng thứ $i$ trong số $N$ dòng tiếp theo ghi hai số nguyên $A_i , B_i$ cách nhau bởi dấu cách là cặp giá trị số viết trên quân bài thứ $i$ trong số $N$ quân bài bị loại khỏi bộ bài.

## Dữ liệu ra:
- Ghi ra số lượng dãy ít nhất gộp được từ các quân bài còn lại sao cho mỗi quân bài còn lại phải thuộc vào đúng một dãy.

## Ví dụ:
### Dữ liệu vào:
```
7
2
7 5
3 4
```

### Dữ liệu ra:
```
2
```