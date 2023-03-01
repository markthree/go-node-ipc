package main

import (
	"bufio"
	"fmt"
	"os"
)

func main() {
	for {
		reader := bufio.NewReader(os.Stdin)
		text, _ := reader.ReadString(',') // 输入
		fmt.Printf("go  %v\n", text)      // 输出
	}
}
