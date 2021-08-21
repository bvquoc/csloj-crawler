Quyển sách của Bé HD có $n$ trang, đánh số từ $1$ đến $n$. HD có thể mở trang sách từ đầu sách (bắt đầu từ trang $1$) hoặc mở sách từ trang cuối (trang $n$) và khi mở sách thì HD mở từng trang từng trang một. Khi mở trang sách từ đầu sách thì trang 1 luôn ở bên phải (như hình vẽ):
<center><img src="/images/problems/199/BOOK.png" width="200px" /></center>

Khi mở trang sách từ cuối sách thì trang $n$ có thể ở bên phải hoặc bên trái (xem mô tả test ví dụ).

**Yêu cầu:** Bạn tính xem HD phải giở ít nhất bao nhiêu trang sách để đến trang $p$.

## Dữ liệu vào:
- Dòng đầu chứa số lượng câu hỏi $t\ (1≤t≤10)$;
- Mỗi dòng tiếp theo chứa một câu hỏi có dạng một số nguyên dương $n\ (1≤n≤10^5 )$ và số nguyên dương $p\ (1≤p≤n)$.

## Dữ liệu ra:
- Với mỗi câu hỏi, ghi ra trên một dòng số trang sách ít nhất phải lật của HD.

## Ví dụ:
#### Dữ liệu vào:
```
2
6 2
5 4
```

#### Dữ liệu ra:
```
1
0
```

#### Giải thích:
- Câu hỏi $1$:
<center><img src="/images/problems/199/BOOK2.svg" width="350px" /></center>

- Câu hỏi $2$:
<center><img src="/images/problems/199/BOOK3.svg" width="350px" /></center>