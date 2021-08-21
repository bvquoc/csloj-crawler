**<center>Nguồn: Ôn HN tháng 11/2017, Thầy Lê Minh Hoàng, Ngày 1</center>**

Một dãy dấu ngoặc đúng là một dãy các ký tự `(` và `)` được định nghĩa như sau:
- Dãy rỗng (không có ký tự nào) là một dãy dấu ngoặc đúng;
- Nếu ~A~ là một dãy dấu ngoặc đúng thì ~(A)~ là dãy dấu ngoặc đúng. Dấu ngoặc mở và dấu ngoặc đóng hai bên 
dãy ~A~ được gọi là tương ứng với nhau;
- Nếu ~A~ và ~B~ là hai dãy dấu ngoặc đúng thì ~AB~ là dãy dấu ngoặc đúng.

Cho xâu ký tự ~𝑆 = 𝑠_1𝑠_2 … 𝑠_𝑛~ chỉ gồm các ký tự `(` và `)`, xét một dãy gồm ~𝑚~ thao tác thuộc một trong hai dạng:
- ~C\ 𝑖:~ Nếu ký tự ~𝑠_𝑖~ đang là dấu mở ngoặc (, nó sẽ được thay bởi dấu đóng ngoặc `)` và ngược lại, nếu ký tự ~𝑠_𝑖~ 
đang là dấu đóng ngoặc, nó sẽ được thay bằng dấu mở ngoặc.
- ~Q\ 𝑖:~ Cho biết độ dài dãy ngoặc đúng dài nhất tạo thành từ các ký tự liên tiếp trong xâu ~𝑆~ bắt đầu từ vị trí ~𝑖~. Tức 
là tìm độ dài ~𝑘~ lớn nhất mà xâu ~𝑠_𝑖𝑠_{𝑖+1} … 𝑠_{𝑖+𝑘−1}~ là một dãy ngoặc đúng.

**Yêu cầu:** Hãy trả lời tất cả các truy vấn loại ~Q~.

## Dữ liệu vào:
- Dòng đầu chứa xâu ký tự ~𝑆~ độ dài ~𝑛 ≤ 10^6~;
- Dòng thứ hai chứa số nguyên dương ~𝑚 ≤ 10^6~ là số thao tác;
 - ~𝑚~ dòng tiếp theo, mỗi dòng chứa ký tự đầu dòng ~∈ \{C,Q\}~ cho biết loại thao tác, tiếp theo là dấu cách và một số 
nguyên ~𝑖~ chỉ ra vị trí tương ứng với thao tác ~(1 ≤ 𝑖 ≤ 𝑛)~.

## Dữ liệu ra:
- Úng với mỗi thao tác ~Q~ ghi ra một số nguyên duy nhất là kết quả trả lời trên một dòng.

## Ví dụ:
#### Dữ liệu vào:
```
)((())()
6
Q 3
C 7
Q 2
Q 1
C 1
Q 1
```

#### Dữ liệu ra:
```
6
6
0
8
```