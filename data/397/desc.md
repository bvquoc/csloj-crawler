Trong chúng ta chắc hẳn ai cũng đã từng chơi trò **giải ô chữ SUDOKU**. Đó là trò chơi điền các số từ $1$ đến $9$ vào bảng hình vuông $9×9$ sao cho trên mỗi hàng ngang, mỗi cột dọc và mỗi hình vuông $3×3$ đều có đủ các số từ $1$ đến $9$, mỗi số chỉ có mặt $1$ lần. (Xem hình vẽ)
<center><img src="/images/problems/397/BTSUDOKU.png" width=800px></center>
<center>Hình bên trái là “đề bài” và hình bên phải là “Đáp án”.</center>

<br>
Đối với con người, có nhiều ô chữ SUDOKU rất khó giải, tuy nhiên đối với máy tính, việc giải ô chữ SUDOKU lại rất đơn giản (Tất nhiên phải chờ các bạn viết chương trình cho máy tính).

Nhiệm vụ của các bạn là viết chương trình giải ô chữ SUDOKU.

## Dữ liệu vào:
- Một dòng duy nhất chứa một xâu ký tự gồm các số từ $1$ đến $9$ và ký tự `.` Tương ứng cho các sô trên “đề bài”, trong đó ký tự `.` là các ô còn trống ($9$ ký tự cho mỗi hàng, $9$ hàng là $81$ ký tự). 

## Dữ liệu ra:
- Một xâu gồm $81$ ký tự số $1$ đến $9$ là lời giải cho ô chữ đề bài.

## Ví dụ:
### Dữ liệu vào:
```
....18.6....3...5..6.....4.....5...86....3....79.4.2...4....3..5....2.16.236.....
```

### Dữ liệu ra:
```
295418763714369852368725941431257698652893174879146235946581327587932416123674589
```

### Giải thích:
- Dữ liệu vào chính là "đề bài" ở hình trên, Dữ liệu ra là "đáp án" tương ứng.

## Giới hạn:
- Mỗi đề bài có một đáp án duy nhất.