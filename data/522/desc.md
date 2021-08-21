Cho một xâu độ dài ~N~ chỉ gồm các kí tự `(` và `)`, các kí tự được đánh số từ ~1~ đến ~N~ theo chiều từ trái qua phải.

Một dãy ngoặc đúng được định nghĩa như sau:
- Xâu rỗng là một dãy ngoặc đúng;
- Nếu ~A~ là một dãy ngoặc đúng thì ~(A)~ là một dãy ngoặc đúng;
- Nếu ~A~ và ~B~ là hai dãy ngoặc đúng thì ~AB~ là một dãy ngoặc đúng;

Cho ~M~ truy vấn, mỗi truy vấn thuộc một trong hai loại sau:
- ~0\ i:~ thay đổi kí tự dấu ngoặc ở vị trí ~i~ của xâu kí tự thành kí tự dấu ngoặc ngược lại;
- ~1\ i\ j:~ in ra ~1~ nếu xâu con từ vị trí ~i~ đến vị trí ~j~ là một dãy ngoặc đúng, in ra ~0~ trong trường hợp ngược lại.

## Dữ liệu vào:
- Dòng đầu chứa hai số nguyên dương ~N, M~ là độ dài dãy ngoặc và số truy vấn;
- Dòng thứ hai chứa xâu ký tự độ dài ~N~ chỉ gồm các ký tự `(` và `)`;
- ~M~ dòng tiếp theo, mỗi dòng chứa một truy vấn thuộc một trong hai loại nêu trên.

## Dữ liệu ra:
- Một chuỗi gồm các ký tự ~0~ hoặc ~1~ tướng ứng với câu trả lời mỗi truy vấn loại ~1\ i\ j~.

## Ví dụ:
#### Dữ liệu vào:
```
8 7
()))(())
1 1 2
1 3 4
0 3
1 1 4
1 5 8
0 6
1 5 8
```

#### Dữ liệu ra:
```
10110
```

## Giới hạn:
- ~1 ≤ N, M ≤ 10^5; 1 ≤ i ≤ j ≤ N~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)