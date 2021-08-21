Hai bạn học sinh trong lúc nhàn rỗi nghĩ ra trò chơi sau đây. Mỗi bạn chọn trước một dãy số gồm $n$ số nguyên. Giả sử dãy số mà bạn thứ nhất chọn là: $b_1,b_2,\dots, b_n$ còn dãy số mà bạn thứ hai chọn là $c_1,c_2,\dots,c_n$.

Mỗi lượt chơi mỗi bạn đưa ra một số hạng trong dãy số của mình. Nếu bạn thứ nhất đưa ra số hạng $b_i\ (1≤i≤n)$, còn bạn thứ hai đưa ra số hạng $c_j\ (1≤j≤n)$ thì giá của lượt chơi đó sẽ là $|b_i+c_j|$. **Ví dụ:** Giả sử dãy số bạn thứ nhất chọn là $1, -2$; còn dãy số mà bạn thứ hai chọn là $2, 3$. Khi đó các khả năng có thể của một lượt chơi là $(1, 2), (1, 3), (-2, 2), (-2, 3)$. Như vậy, giá nhỏ nhất của một lượt chơi trong số các lượt chơi có thể là $0$ tương ứng với giá của lượt chơi $(-2, 2)$.

**Yêu cầu:** Hãy xác định giá nhỏ nhất của một lượt chơi trong số các lượt chơi có thể.

## Dữ liệu vào:
- Dòng đầu tiên chứa số nguyên dương $n\ (n≤10^5)$;
- Dòng thứ hai chứa dãy số nguyên $b_1,b_2,\dots, b_n\ (|b_i|≤10^9)$;
- Dòng thứ ba chứa dãy số nguyên $c_1,c_2,\dots, c_n\ (|c_i|≤10^9)$.

## Dữ liệu ra:
- Ghi ra giá nhỏ nhất tìm được.

## Ví dụ:
#### Dữ liệu vào:
```
2
1 -2
2 3
```

#### Dữ liệu ra:
```
0
```

## Giới hạn:
- $60\%$ số tests ứng với $60\%$ số điểm của bài có $1≤n≤1000$.