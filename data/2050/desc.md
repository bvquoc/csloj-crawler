**<center>Nguồn: Free Contest 7</center>**
***<center>APIO 2012</center>***

Trong một môn phái, ninja được khách hàng giao nhiệm vụ, họ được trả tiền thưởng theo những gì mà họ làm. Trong môn phái này, có một người gọi là ông trùm. Ngoài ông trùm ra thì mọi ninja khác có đúng một sếp. Để nhiệm vụ được bảo mật, mọi chỉ thị chỉ được truyền từ sếp xuống cấp dưới và không có chiều ngược lại.

Bạn muốn chọn một số ninja để giao cho khách hàng. Bạn phải trả tiền để thuê ninja. Bạn biết số tiền được yêu cầu bởi mỗi ninja. Tổng số tiền được yêu cầu bởi các ninja được thuê phải không vượt quá số tiền trong túi của bạn. Hơn nữa, để giao nhiệm vụ, bạn phải nhờ một ninja làm quản lý, người quản lý này phải có khả năng truyền thông tin về nhiệm vụ cho tất cả các ninja được thuê. Khi nhiệm vụ được giao, một ninja không được thuê có thể làm trung gian để truyền đạt nhiệm vụ. Ninja được nhờ làm quản lý không nhất thiết phải được thuê, và tất nhiên, nếu người quản lý không được
thuê thì không cần phải trả tiền cho người quản lý.

Bạn muốn làm khách hàng hài lòng nhất có thể. Độ hài lòng của khách hàng được tính bằng số lượng ninja được thuê nhân với kinh nghiệm quản lý của người quản lý. Kinh nghiệm quản lý của từng người là cố định.

Các ninja được đánh số từ $1$ đến $N$. Cho biết ninja $i$ có sếp là $B_i$, số tiền yêu cầu là $C_i$, kinh nghiệm quản lý là $L_i$, và $M$ là số tiền trong túi của bạn, hãy in ra độ hài lòng tối đa đạt được khi thuê ninja và đồng thời đáp ứng các yêu cầu bên trên.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên dương $N$ và $M$, là số lượng ninja và số tiền trong túi $(1 ≤ N ≤ 100000, 1 ≤ M ≤ 10^9)$;
- Trong $N$ dòng tiếp theo, dòng thứ $i$ chứa ba số nguyên $B_i, C_i, L_i$ lần lượt là sếp của ninja $i$, số tiền mà ninja $i$ yêu cầu và kinh nghiệm quản lý của ninja $i\ (0 ≤ B_i < i, 1 ≤ C_i ≤ M, 1 ≤ L_i ≤ 10^9)$;
- Ông trùm là người có $B_i$ bằng $0$. Vì $B_i < i$ nên với mỗi ninja, chỉ số của sếp luôn nhỏ hơn chỉ số của ninja.

## Dữ liệu ra:
- In ra độ hài lòng tối đa đạt được.

## Giới hạn:
- Có $30\%$ số test mà $N ≤ 3000$.

## Ví dụ:
#### Dữ liệu vào:
```
5 4
0 3 3
1 3 5
2 2 2
1 2 4
2 3 1
```

#### Dữ liệu ra:
```
6
```

#### Giải thích:
- Thuê ninja $3$ và $4$, nhờ ninja $1$ làm người quản lý. Số tiền được yêu cầu của hai ninja này là $4$, không vượt quá số tiền trong túi. Vì thuê $2$ ninja và kinh nghiệm của ninja $1$ là $3$, nên độ hài lòng là $6$. Đây là giá trị tối đa.