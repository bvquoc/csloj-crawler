**<center>NGUỒN: CONTEST PRACTICE VNOI20  (WEEK 1 - T11/2019)</center>**
<br>

Một dãy ngoặc được hợp lệ là một chuỗi các kí tự chỉ bao gồm những kí tự ngoặc đóng ~(“)”, “]”, “\}”)~, ngoặc mở ~(“(”, “[”, “\{”)~ và thỏa mãn một trong những điều kiện sau:

1. Là dãy ngoặc rỗng
2.	Nếu nó có thể biểu diển dưới dạng ~(S)~, ~[S]~ và ~\{S\}~ với ~S~ là một dãy ngoặc hợp lệ
3.	Nếu nó là một chuỗi được tạo ra bằng cách ghép hai dãy ngoặc hợp lệ. Ví dụ ~A~ và ~B~ là dãy ngoặc hợp lệ thì ~AB~ cũng được coi là hợp lệ

Long được thầy cho một dãy ngoặc hợp lệ để học thuộc, nhưng vì quậy phá nên đã lỡ làm dính mực một vài kí tự trong dãy. Để phạt Long, thầy bắt Long phải đếm số cách có thể để tạo ra dãy ngoặc hợp lệ bằng cách thay thế những kí tự bị dính mực.

Bạn hãy giúp Long trả lời thầy nhé. Vì kết quả có thể rất lớn, nên bạn chỉ cần ghi ra ~5~ **chữ số cuối** của kết quả.

## Dữ liệu vào:
- Dòng đầu tiên là số ~N~ thể hiện độ dài của dãy ngoặc.
- Dòng thứ hai là một xâu ký tự độ dài ~N~ thể hiện dãy ngoặc với các kí tự ngoặc ~(, ), [, ], \{, \}~ và dấu ~?~ thể hiện những kí tự bị dính mực.

## Dữ liệu ra:
- In ra ~5~ **chữ số cuối** của số cách có thể để tạo ra những dãy ngoặc hợp lệ từ dãy ngoặc dính mực ban đầu.

## Ví dụ:
#### Dữ liệu vào:
```
8
[{????)]
```

#### Dữ liệu ra:
```
10
```

#### Dữ liệu vào:
```
24
{[????[??????]})????????
```

#### Dữ liệu ra:
```
15106
```

## Giới hạn:
- ~40\%~ số test có ~N<=50~ và số dấu hỏi bé hơn ~10~
- ~60\%~ test còn lại có ~2<=N<=200~