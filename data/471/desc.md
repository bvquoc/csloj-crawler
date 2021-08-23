Palindrome là xâu ký tự mà nếu đọc nó từ trái sang phải cũng như từ phải sang trái ta được cùng một xâu. Một xâu ký tự bất kỳ luôn có thể biểu diễn như là một dãy các palindrome nếu như ta coi xâu chỉ gồm một ký tự luôn là một palindrome. Ví dụ: xâu `bobseesanna` có thể biểu diễn dưới dạng dãy các palindrome theo nhiều cách, chẳng hạn:
- `bobseesanna` = `bob` + `sees` + `anna`
- `bobseesanna` = `bob` + `s` + `ee` + `s` + `anna`
- `bobseesanna` = `b` +`o` + `b` + `sees` + `a` + `n` + `n` + `a`.

Cho xâu ký tự $s$, cần tìm cách biểu diễn xâu $s$ dưới dạng một dãy gồm số ít nhất các palindrome. Ví dụ: cho $s =$ `bobseesanna`, do ta có `bobseesanna` = `bob` + `sees` + `anna` và không thể biểu diễn `bobseesanna` bởi ít hơn là $3$ palindrome nên biểu diễn này chính là biểu diễn cần tìm.

## Dữ liệu vào:
- Gồm một dòng chứa xâu ký tự $s$ chỉ gồm các chữ cái latin thường.

## Dữ liệu ra:
- Gồm một dòng duy nhất ghi số lượng ít nhất các palindrome trong biểu diễn tìm được.

## Ví dụ:
### Dữ liệu vào:
```
bobseesanna
```

### Dữ liệu ra:
```
3
```

## Giới hạn:
- Độ dài xâu $s$ không quá $255$ ký tự.