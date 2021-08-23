**<center>Nguồn: Beginner Free Contest 14</center>**

Maleficent kể về câu chuyện của bà tiên xinh đẹp xứ Moors với đôi cánh mạnh mẽ và quyền năng diệu kì. Cuộc sống nơi thần tiên xứ sở của bà lẽ ra cũng đã được yên vui và tươi đẹp như biết bao bà tiên khác nếu như bà không gặp gỡ và yêu phải một người phàm. Bị lòng tham lam và ích kỷ của con người lừa lọc và lấy đi thứ tài sản quý giá nhất đời mình, Maleficent từ buồn bã, đau đớn, dần dẫn đã rở nên căm phẫn và hận thù loài người. Con tim bà cũng dần trở lên sắt đá và lạnh lùng hơn, khiến xứ Moors rơi vào thời kì tối tăm chưa từng có.

Khi biết được kẻ phản bội mình, Stefan đã lên làm vua của xứ láng giềng và có một cô con gái mới sinh Aurora, Maleficent đã quyết định đến và trả thù cho chính mình bằng môt món quá bất ngờ. Tuy nhiên, người nhận món quà định mệnh đó không phải là vị vua ích kỷ, mà lại là cô công chúa xinh đẹp còn nằm trong nôi. Mãi tận $16$ năm sau, Maleficent mới kịp nhận ra và hối hận sự mù quáng nhất thời của mình. Từ đó, bà tìm mọi cách để bù đắp và gỡ bỏ lời nguyền cho công chúa nhưng không tìm được. Trong lúc tuyệt vọng nhất thì con quạ Davis của bà đã vô tình thấy được một chiếc mũ ma thuật, ẩn chứa một sức mạnh tiềm tàng hơn cả sức mạnh hiện tại của bà. Và nếu không nhầm thì ma thuật từ chiếc mũ này có thể phá vỡ được lời nguyền mà bà đã đặt lên người cô công chúa Aurora bé bỏng của chúng ta.

Nhưng sức mạnh nào cũng cần sự đánh đổi, bên trong chiếc mũ có ghi lại một bài toán và giải được bài toán đó là điều kiện để Maleficent có thể sử dụng được ma thuật từ chiếc mũ. Chiếc mũ sẽ hiện ra $N$ con số có $M$ chữ số (có thể có số $0$ ở đầu), Maleficent cần thay đổi ít nhất số lượng chữ số sao cho $N$ số mới tạo thành một dãy không giảm. Ví dụ, có $3$ số theo thứ tự là $100, 001, 000$, chúng ta cần $2$ bước để biến số $001$ thành $201$ và $000$ thành $400$ để thu được $3$ số $100, 201$ và $400$ không giảm.

Maleficent không giỏi về những con số nên đã nhờ các bạn giúp đỡ để cứu lấy cô công chúa Aurora đáng yêu của mình.

## Dữ liệu vào:
- Dòng đầu tiên chứa hai số nguyên dương $N, M$ là số lượng số xuất hiện và số lượng chữ số của mỗi số;
- Dòng thứ i trong $N$ dòng tiếp theo, mỗi dòng chứa một số nguyên dương $x$ có chính xác $M$ chứ số (tính cả số $0$ ở đầu).

## Dữ liệu ra:
- Ghi ra một số nguyên duy nhất là số bước thay đổi ít nhất để Maleficent có thể sử dụng được mũ phép và cứu được Aurora.

## Ví dụ:
### Dữ liệu vào:
```
5 3
111
001
000
111
000
```

### Dữ liệu ra:
```
4
```

### Dữ liệu vào:
```
15 3
999
888
777
666
555
444
333
222
111
222
333
444
555
666
999
```

### Dữ liệu ra:
```
13
```

## Giới hạn:
- **Subtask** $\#1\ (50\%\text{ số điểm}): N ≤ 10, M ≤ 5$;
- **Subtask** $\#2\ (50\%\text{ số điểm}): N ≤ 40, M ≤ 400$.