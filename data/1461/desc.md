**<center>CSP Open Contest 4</center>**

Để chuẩn bị kì thi cuối kì môn Giải tích và Vật lý đại cương, Bờm quyết định sẽ ôn luyện bằng cách chơi một trò chơi với dãy ngoặc đúng, dãy ngoặc đúng ở đây được định nghĩa như sau:
- Dãy ngoặc "()" là một dãy ngoặc đúng;
- Nếu dãy $A$ là một dãy ngoặc đúng và dãy $B$ là một dãy ngoặc đúng thì $AB$ là một dãy ngoặc đúng;
- Nếu $A$ là một dãy ngoặc đúng thì dãy "(A)" là một dãy ngoặc đúng.

Trò này bao gồm $Q$ ván và Bờm sẽ phải chơi lần lượt từng ván một. Trong mỗi ván, máy tính sẽ đảo dấu của một vị trí bất kì trong dãy hiện có, tức là từ "(" sẽ trở thành ")" và từ ")" sẽ trở thành "(", và nhiệm vụ của Bờm là sẽ phải tìm một vị trí bất kì và đảo ngược dấu vị trí đó sao cho dãy ngoặc đó vẫn là dãy ngoặc đúng.

Tuy nhiên vì Bờm rất lười nên mỗi thao tác Bờm chỉ muốn tìm vị trí trái nhất để tiến hành đảo ngược dấu. Việc tính toán vị trí đổi dấu tương đối vất vả nên bạn hãy tìm cách giúp Bờm nhé!

Chú ý rằng sau khi Bờm biến đổi lại dãy về dãy ngoặc đúng, dãy đó sẽ được sử dụng trong ván tiếp theo.

## Dữ liệu vào:
- Dòng đầu tiên bao gồm hai số nguyên dương $N$ và $Q$ là độ dài của dãy ngoặc đúng đang có và số lượng ván;
- Dòng thứ hai bao gồm một xâu gồm $N$ kí tự là dãy ngoặc đúng hiện tại đang có. Dữ liệu đảm bảo đây là dãy ngoặc đúng;
- Mỗi dòng trong $Q$ dòng tiếp theo, dòng thứ $i$ bao gồm một số nguyên $x$ là vị trí mà máy tính sẽ đổi dấu trong ván thứ $i$.

## Dữ liệu ra:
- Gồm một xâu gồm $N$ kí tự biểu thị dãy ngoặc đúng sau ván cuối cùng.

## Ví dụ:
### Dữ liệu vào:
```
8 3
(((())))
4
6
3
```

### Dữ liệu ra:
```
(()()())
```

### Giải thích:
- Sau khi vị trí $4$ bị đổi dấu, xâu trở thành `((()))))`, khi đó vị trí trái nhất ta có thể đổi là vị trí $4$, xâu quay lại trở thành `(((())))`;
- Sau khi vị trí $6$ bị đổi dấu, xâu trở thành `(((()())`, khi đó vị trí trái nhất ta có thể đổi là vị trí $2$, khi đó xâu trở thành `()(()())`;
- Sau khi vị trí $3$ bị đổi dấu, xâu trở thành `())()())`, khi đó vị trí trái nhất ta có thể đổi là vị trí $2$, khi đó xâu trở thành `(()()())`.

## Giới hạn:
- Trong tất cả các test $N ≤ 300000, Q ≤ 500000$, trong mọi truy vấn $1 ≤ x ≤ N$;
- Subtask $\#1: 10\%$ số điểm có $N, Q ≤ 100$;
- Subtask $\#2: 20\%$ số điểm khác có $N, Q ≤ 1000$;
- Subtask $\#3: 10\%$ số điểm khác có tất cả cả vị trí trong thao tác đều là dấu ’(’;
-Subtask $\#4: 10\%$ số điểm khác có $N ≤ 50000, Q ≤ 100000$ và $x ≤ 100$ với mọi truy vấn;
- Subtask $\#5: 25\%$ số điểm khác có $N ≤ 50000, Q ≤ 100000$;
- Subtask $\#6: 25\%$ số điểm còn lại không có điều kiện gì thêm.